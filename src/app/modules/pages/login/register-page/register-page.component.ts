import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth-forms/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  miformbuilder: FormGroup | undefined;

  constructor(private _formbuilder: FormBuilder, private _authservice: AuthService) {}

  ngOnInit(): void {

    this.miformbuilder = this._formbuilder.group({
       name: '',
       surname: '',
       email: '',
       password: ''
    });

  }

  submitForm = () => {
    this._authservice.register();

  }


}
