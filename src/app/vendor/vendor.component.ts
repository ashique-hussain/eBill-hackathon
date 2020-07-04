import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private vendorDetails = [
    {
      id : 1,
      name: "Reliance Digital"
    },{
      id : 2,
      name: "Reliance Footwear"
    },{
      id : 3,
      name: "Reliance Grocery"
    },{
      id : 4,
      name: "Reliance Trends"
    },{
      id : 5,
      name: "Reliance Manufacturing"
    }
  ]
}
