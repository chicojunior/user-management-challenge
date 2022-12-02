import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './core/models/user';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users$: Observable<User[]> | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService
      .getUsers()
      .pipe(map((res: any) => res.data));

    this.users$.subscribe((users) => console.log(users));
  }
}
