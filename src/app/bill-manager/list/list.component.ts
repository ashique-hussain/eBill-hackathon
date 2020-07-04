import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

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
  {position: 4, name: 'Grocery Market', created_at: '2020-02-06', total_amount_paid: 225, showOptions: false},
  {position: 5, name: 'Reliance Footprints', created_at: '2019-12-25', total_amount_paid: 999, showOptions: false},
  {position: 6, name: 'Reliance Fresh', created_at: '2019-12-01', total_amount_paid: 501, showOptions: false},
  {position: 7, name: 'Big Bazaar', created_at: '2019-07-16', total_amount_paid: 450, showOptions: false},
  {position: 8, name: 'Max', created_at: '2019-05-25', total_amount_paid: 1999, showOptions: false},
  {position: 9, name: 'Lifestyle', created_at: '2019-05-25', total_amount_paid: 4999, showOptions: false},
  {position: 10, name: 'Big Bazaar', created_at: '2019-04-13', total_amount_paid: 345, showOptions: false},
  {position: 11, name: 'Grocery Market', created_at: '2019-03-15', total_amount_paid: 1099, showOptions: false},
  {position: 12, name: 'Reliance Fresh', created_at: '2019-02-20', total_amount_paid: 699, showOptions: false},
  {position: 13, name: 'Reliance Footprints', created_at: '2018-10-30', total_amount_paid: 699, showOptions: false},
  {position: 14, name: 'Big Bazaar', created_at: '2018-05-25', total_amount_paid: 699, showOptions: false},
  {position: 15, name: 'Grocery Market', created_at: '2018-03-25', total_amount_paid: 699, showOptions: false},
  {position: 16, name: 'Grocery Market', created_at: '2018-03-25', total_amount_paid: 699, showOptions: false},
  {position: 17, name: 'Grocery Market', created_at: '2018-03-25', total_amount_paid: 699, showOptions: false},
  {position: 18, name: 'Grocery Market', created_at: '2018-03-25', total_amount_paid: 699, showOptions: false},
  {position: 19, name: 'Grocery Market', created_at: '2018-03-25', total_amount_paid: 699, showOptions: false},
  {position: 20, name: 'Grocery Market', created_at: '2018-03-25', total_amount_paid: 699, showOptions: false}
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }
  resultsLength = 0;
  displayedColumns: string[] = ['position', 'created_at', 'name', 'total_amount_paid', 'options'];
  dataSource = new MatTableDataSource<BillMetaData>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.resultsLength = ELEMENT_DATA.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggle(row) {
    this.dataSource.data.forEach((data) => {
      data.showOptions = false;
    });
    row.showOptions = !row.showOptions;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
