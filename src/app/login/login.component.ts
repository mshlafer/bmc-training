import { BmcValidators } from './bmc-validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public loginForm: FormGroup;
  public username: FormControl;
  public password: FormControl;
  private router: Router;

  constructor(router: Router) {

    this.router = router;

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
    this.router.navigate(['list']);
  }

}
