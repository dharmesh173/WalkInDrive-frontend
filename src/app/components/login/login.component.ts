import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
 
})
export class LoginComponent {
  loginData = this.formBuilder.group({
    username: [''],
    password: [''],

  });

  constructor(private formBuilder: FormBuilder) {}
 
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginData.value);
  }



}
