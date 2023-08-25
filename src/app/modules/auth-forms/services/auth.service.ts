import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login = () => {
    console.log('Hacer proceso de login');

  }

  register = () => {
    console.log('Hacer proceso de registro');

  }

  logout = () => {
    console.log('Hacer proceso de logout');

  }

}
