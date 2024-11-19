import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, startWith } from 'rxjs';
import { UserObsApiService } from 'src/app/services/observable-api-rest/user-obs-api.service';
import { UserApi } from 'src/app/interface/IUser';

@Component({
  selector: 'app-observable-api-rest',
  templateUrl: './observable-api-rest.component.html',
  styles: [
    `
    .error-message {
      color: red;
      padding: 10px;
      margin: 10px 0;
      background-color: #fff3f3;
      border: 1px solid red;
      border-radius: 4px;
    }
    .loading {
      padding: 20px;
      text-align: center;
      color: #666;
    }
    .user-card {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px 0;
      border-radius: 4px;
    }
    .disabled {
      opacity: 0.7;
      pointer-events: none;
    }
    `
  ]
})
export class ObservableApiRestComponent implements OnInit, OnDestroy {

  users$ = this.userService.users$;
  loading$ = this.userService.loading$;
  error$ = this.userService.error$;

  private searchTerms = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private userService: UserObsApiService) {}

  ngOnInit(): void {

    // Cargar los usuarios inicialmente
    this.userService.loadUsers();

    // Configurar la búsqueda
    this.searchTerms.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(term => {
      this.userService.searchUsers(term).subscribe();
    });
  }

  onSearch(event: Event): void {

    const term = (event.target as HTMLInputElement).value;
    this.searchTerms.next(term);
  }

  onAddNew(): void {
    const newUser = {
      name: 'Nuevo Usuario',
      email: 'nuevo@email.com'
    };

    this.userService.createUser(newUser).subscribe({
      error: (error) => console.error('Error al crear usuario:', error)
    });
  }

  onEdit(user: UserApi): void {

    const updatedUser = {...user, name: `${user.name} (Editado)` };

     this.userService.updateUser(user.id, updatedUser).subscribe({
      error: (error) => console.error('Error al actualizar usuario:', error)
    });
  }

  onDelete(id: number): void {

    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {

      this.userService.deleteUser(id).subscribe({
        error: (error) => console.error('Error al eliminar usuario:', error)
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
