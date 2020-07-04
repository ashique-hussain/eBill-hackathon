import { Component, OnInit } from '@angular/core';
import {SideNavService} from '../services/side-nav.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNav: SideNavService,
              private authService: AuthService) { }

  toggleActive = false;

  toggleSideNav() {
    this.toggleActive = !this.toggleActive;
    this.sideNav.toggle();
  }

  ngOnInit() {
  }

}
