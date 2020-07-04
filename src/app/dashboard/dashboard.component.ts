import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import {SideNavService} from "../services/side-nav.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sideNav', {static: true}) public sidenav: MatSidenav;
  private billData: boolean;

  constructor(private sideNavService: SideNavService) { }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
    this.billData = true;
  }

}
