import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {BillMetaData} from "../bill-manager/list/list.component";
import {UploadService} from "../services/upload.service";

export interface BillMetaData {
  orderDate: string;
  vendorName: string;
  uploadedFile: string;
}

const ELEMENT_DATA: any[] = [];

@Component({
  selector: 'app-custom-bills',
  templateUrl: './custom-bills.component.html',
  styleUrls: ['./custom-bills.component.scss']
})
export class CustomBillsComponent implements OnInit {
  displayedColumns: string[] = ['orderDate', 'vendorName', 'uploadedFile'];
  dataSource = new MatTableDataSource<BillMetaData>(ELEMENT_DATA);
  constructor(private uploadService: UploadService) {
  }


  ngOnInit() {
    const data = this.uploadService.getData();
    if (data) {
      ELEMENT_DATA.push({
        orderDate: data.date,
        vendorName: data.vendor,
        uploadedFile: data.filename
      });
    }
  }

}
