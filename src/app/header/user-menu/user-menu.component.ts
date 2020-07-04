import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  islogout: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.islogout = false;
  }

  ngOnInit() {
  }
  logout(event: any) {
    this.authService.login(this.islogout);
    return this.router.navigate(['/login']);
  }
}
