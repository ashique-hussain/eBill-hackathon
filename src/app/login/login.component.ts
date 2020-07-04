import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isOtpSent: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.isOtpSent = false;
  }

  ngOnInit() {
  }
  submit(event: any) {
    event.preventDefault();
    this.isOtpSent = true;
  }
  logIn() {
    this.authService.login(true);
    return this.router.navigate(['/dashboard']);
  }

}
