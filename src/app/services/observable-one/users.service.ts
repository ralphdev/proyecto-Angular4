import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from 'src/app/interface/IUser';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userSubject = new BehaviorSubject<IUser[]>([]);
  users$ = this.userSubject.asObservable();

  // Observable simulando datos de una API
  private mockUsers: IUser[] = [
    { id: 1, name: 'Ana', email: 'ana@email.com' },
    { id: 2, name: 'Carlos', email: 'carlos@email.com' },
    { id: 3, name: 'María', email: 'maria@email.com' },
    { id: 4, name: "Luis", email: "luis@email.com" },
    { id: 5, name: "Sofía", email: "sofia@email.com" },
    { id: 6, name: "Jorge", email: "jorge@email.com" },
    { id: 7, name: "Lucía", email: "lucia@email.com" },
    { id: 8, name: "Miguel", email: "miguel@email.com" },
    { id: 9, name: "Elena", email: "elena@email.com" },
    { id: 10, name: "Pedro", email: "pedro@email.com" },
    { id: 11, name: "Clara", email: "clara@email.com" },
    { id: 12, name: "Andrés", email: "andres@email.com" },
    { id: 13, name: "Laura", email: "laura@email.com" },
    { id: 14, name: "Fernando", email: "fernando@email.com" },
    { id: 15, name: "Isabel", email: "isabel@email.com" },
    { id: 16, name: "Alberto", email: "alberto@email.com" },
    { id: 17, name: "Paula", email: "paula@email.com" },
    { id: 18, name: "Ricardo", email: "ricardo@email.com" },
    { id: 19, name: "Victoria", email: "victoria@email.com" },
    { id: 20, name: "Diego", email: "diego@email.com" },
    { id: 21, name: "Gabriela", email: "gabriela@email.com" },
    { id: 22, name: "Héctor", email: "hector@email.com" },
    { id: 23, name: "Silvia", email: "silvia@email.com" },
    { id: 24, name: "Manuel", email: "manuel@email.com" },
    { id: 25, name: "Patricia", email: "patricia@email.com" }
  ];

  constructor(){

    // Inicializar datos
    this.loadUsers();
  }

  loadUsers(): void {

    // Simulamos una llamada HTTP
    this.getMockUsers().subscribe(users => {
      this.userSubject.next(users);
    });
  }

  getMockUsers(): Observable<IUser[]> {

    return of(this.mockUsers).pipe(
      delay(1000)
    )
  }

  addUser(user: IUser): void {

    const currentUsers = this.userSubject.getValue();
    this.userSubject.next([...currentUsers, user]);
  }

  searchUsers(term: string): Observable<IUser[]> {

    return this.users$.pipe(
      map( users => users.filter( user =>
        user.name.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase())
      ))
    );
  }
}
