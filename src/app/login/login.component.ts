import { BmcValidators } from './bmc-validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public loginForm: FormGroup;
  public username: FormControl;
  public password: FormControl;

  constructor() {

    this.username = new FormControl('',
      Validators.compose([
          Validators.required,
          BmcValidators.isNir
        ])
    );

    this.password = new FormControl('',
      Validators.required
    );

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    })
  }

  public login() {
    console.log(` required: ${this.username.valid}`)
    console.log(` isNir: ${this.username.errors}`)
  }

}
