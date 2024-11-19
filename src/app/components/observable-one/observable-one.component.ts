import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, startWith, switchMap, takeUntil } from 'rxjs';
import { IUser } from 'src/app/interface/IUser';
import { UsersService } from 'src/app/services/observable-one/users.service';

@Component({
  selector: 'app-observable-one',
  templateUrl: './observable-one.component.html',
  styles: [
  ]
})
export class ObservableOneComponent  implements OnInit, OnDestroy {

  users$: Observable<IUser[]> = this.userService.users$;
  loading:boolean = false;
  private searchTerms = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {

    // Configurar la búsqueda con debounce
    this.users$ = this.searchTerms.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {

        this.loading = true;
        return this.userService.searchUsers(term).pipe(
          map(users => {

            this.loading = false;
            return users;
          })
        );
      }),
      takeUntil(this.destroy$)
    );
  }

  onSearch(event: Event): void {

    const term = (event.target as HTMLInputElement).value;

    this.searchTerms.next(term);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
