import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from '../users/users.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, UsersModule],
  exports: [HomeComponent],
})
export class HomeModule {}
