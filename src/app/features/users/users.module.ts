import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [AddUserComponent, ListUsersComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  exports: [AddUserComponent, ListUsersComponent],
})
export class UsersModule {}
