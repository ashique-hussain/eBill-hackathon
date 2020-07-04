import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean;

  constructor() {
    this.isLogin = false;
  }

  login(login: boolean) {
    this.isLogin = login;
  }

  isLoggedIn(): boolean {
    return this.isLogin;
  }
}
