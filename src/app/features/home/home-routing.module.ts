import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AddUserComponent } from '../users/add-user/add-user.component';
import { ListUsersComponent } from '../users/list-users/list-users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'users/list', component: ListUsersComponent },
      { path: 'users/add', component: AddUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
