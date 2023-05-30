import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword: any;

  Register: User = {
    name: '',
    email: '',
    password: '',
  };
  hidePas = true;
  hideConfPas = true;

  constructor(private register: RegisterService, private router: Router) {
    this.getEmailError();

    this.getConfirmPassword();
  }

  ngOnInit(): void {}

  createUser() {
    this.register.createUser(this.Register).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      (err) => console.error(err)
    );
  }

  getEmailError() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Please provide a valid email' : '';
  }

  getConfirmPassword() {
    if (this.confirmPassword != this.password) {
      return 'The password does not match';
    }
    return 'The password does not match';
  }
}
