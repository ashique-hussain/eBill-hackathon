import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {MatTableDataSource} from "@angular/material";

export interface BillMetaData {
  position: number;
  name: string;
  created_at: string;
  total_amount_paid: number;
  showOptions: boolean;
}

const ELEMENT_DATA: BillMetaData[] = [
  {position: 1, name: 'Reliance Trends', created_at: '2020-06-25', total_amount_paid: 699, showOptions: false},
  {position: 2, name: 'Big Bazaar', created_at: '2020-05-18', total_amount_paid: 305, showOptions: false},
  {position: 3, name: 'Reliance Fresh', created_at: '2020-02-14', total_amount_paid: 110, showOptions: false},
  {position: 4, name: 'Grocery Market', created_at: '2020-02-06', total_amount_paid: 225, showOptions: false}
];

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private changeDetectorRefs: ChangeDetectorRef) { }
  displayedColumns: string[] = ['position', 'created_at', 'name', 'total_amount_paid', 'options'];
  dataSource = new MatTableDataSource<BillMetaData>(ELEMENT_DATA);

  ngOnInit() {
  }

  toggle(row) {
    this.dataSource.data.forEach((data) => {
      data.showOptions = false;
    });
    row.showOptions = !row.showOptions;
  }

  restore(row) {
    this.dataSource.data.forEach((data, i) => {
      if (data.position === row.position) {
        this.dataSource.data.splice(i, 1);
      }
    });
    this.dataSource.data = this.dataSource.data;
  }

}
