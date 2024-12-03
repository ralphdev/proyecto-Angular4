import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, catchError, tap, map, finalize } from 'rxjs';
import { UserApi } from 'src/app/interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserObsApiService {

  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  private usersSubject: BehaviorSubject<UserApi[]> = new BehaviorSubject<UserApi[]>([]);
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  //Observables publicos
  users$ = this.usersSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) { }

  loadUsers():void {

    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    this.http.get<UserApi[]>(this.apiUrl).pipe(
      tap(users => this.usersSubject.next(users)),
      catchError(this.handleError),
      finalize( () => this.loadingSubject.next(false))
    ).subscribe();
  }

  getUserById(id: number): Observable<UserApi> {

    return this.http.get<UserApi>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createUser(user: Omit<UserApi, 'id'>): Observable<UserApi> {

    this.loadingSubject.next(true);

    return this.http.post<UserApi>(this.apiUrl, user).pipe(
      tap(newUser => {
        const currentUsers = this.usersSubject.getValue();
        this.usersSubject.next([...currentUsers, newUser]);
      }),
      catchError(this.handleError),
      finalize(() => this.loadingSubject.next(false))
    );
  }

  updateUser(id: number, user: Partial<UserApi>): Observable<UserApi> {

    return this.http.put<UserApi>(`${this.apiUrl}/${id}`, user).pipe(

      tap(updatedUser => {
        const users = this.usersSubject.getValue();
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
          users[index] = updatedUser;
          this.usersSubject.next([...users]);
        }
      }),
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const users = this.usersSubject.getValue();
        this.usersSubject.next(users.filter(user => user.id !== id));
      }),
      catchError(this.handleError)
    );
  }

  searchUsers(term: string): Observable<UserApi[]> {

    if (!term.trim()) {
      return this.users$;
    }

    return this.users$.pipe(
      map(users => users.filter(user =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }

  private handleError( error: HttpErrorResponse ){

    let errorMessage:string = 'Ha ocurrido un error';

    if(error.error instanceof ErrorEvent){

      //error de lado del cliente
      errorMessage =`Error: ${error.error.message}`;
    } else {
      //Error del backend
      errorMessage = `Codigo de error ${error.status}, mensaje: ${error.message}`;
    }

    this.errorSubject.next(errorMessage);

    return throwError( () => new Error(errorMessage));
  }


}
