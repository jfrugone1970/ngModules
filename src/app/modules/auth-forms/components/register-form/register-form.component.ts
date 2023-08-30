import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  miRegisterForm: FormGroup | undefined;

  constructor(private _formbuilder: FormBuilder, private _authservice: AuthService) {}

  ngOnInit(): void {

    this.miRegisterForm = this._formbuilder.group({
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
