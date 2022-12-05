import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/core/services/users.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide = true;
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private userService: UsersService,
    private toast: HotToastService
  ) {}

  registerUser() {
    this.userService.registerUser(this.registerForm.value);
  }
}
