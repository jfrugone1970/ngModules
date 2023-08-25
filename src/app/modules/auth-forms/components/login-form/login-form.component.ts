import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup | undefined;

  constructor(private _formbuilder: FormBuilder, private _authservice: AuthService) {}

  ngOnInit(): void {

    this.loginForm = this._formbuilder.group({
      username: '',
      email: ''
    });



  }

  submitForm = () => {
    this._authservice.login();

  }

}
