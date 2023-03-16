import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  users: User[];
  user = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  });
  confirmPass = new FormGroup({
    confirmPassword: new FormControl()
  });

  message = '';
  check = false;
  countries = [{
    id: 1,
    name: 'Viet Nam'
  }, {
    id: 2,
    name: 'Thai Lan'
  }, {
    id: 3,
    name: 'USA'
  }];

  constructor() {
    this.users = [];
  }

  ngOnInit(): void {
  }

  AddUser() {
    if (this.check === true) {
      console.log(this.user.value);
      const newUser: User = this.user.value;
      console.log(newUser);
      this.users.push(newUser);
      console.log(this.users);
    } else {
      console.log('Error!!');
    }
  }

  get password() {
    return this.user.get('password');
  }

  get age() {
    return this.user.get('age');
  }

  get phone() {
    return this.user.get('phone');
  }

  checkPassword() {
    console.log(this.user.get('password').value);
    console.log(this.confirmPass.get('confirmPassword').value);
    if (this.user.get('password').value === this.confirmPass.get('confirmPassword').value) {
      this.check = true;
    } else {
      this.message = 'Confirm password is wrong!';
    }
  }
}
