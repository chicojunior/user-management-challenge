import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  hide = true;
  addUserForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    avatarUrl: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  addUser() {
    console.log('Clicked!!!');
    console.log(this.addUserForm);
  }
}
