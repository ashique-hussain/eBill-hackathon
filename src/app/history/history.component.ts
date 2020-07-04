import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

const BILL_DATA: any[] = [
  {
    "userId": "U0001",
    "userName": "Example",
    "phoneNumber": "123456789",
    "billId": "B0001",
    "invoiceNumber": "IV0001",
    "vendorDetails": {
      "vendorId": "V0001",
      "vendorName": "Reliance Fresh",
      "vendorAddress": ""
    },
    "products": [
      {
        "productId": "P001",
        "productName": "Maggie",
        "quantity": 1,
        "rate": 12,
        "discount": 0,
        "amount": 12
      },
      {
        "productId": "P002",
        "productName": "Parle G",
        "quantity": 5,
        "rate": 10,
        "discount": 0,
        "amount": 50
      },
      {
        "productId": "P003",
        "productName": "Peanut Butter",
        "quantity": 1,
        "rate": 12,
        "discount": 0,
        "amount": 12
      },
      {
        "productId": "P004",
        "productName": "Shampoo",
        "quantity": 5,
        "rate": 10,
        "discount": 0,
        "amount": 50
      }
    ],
    "orderDate": "2020/07/10",
    "totalAmount": 5000,
    "totalDiscount": 0,
    "payableAmount": 0,
    "paymentMode": "Cash|Online"
  },
  {
    "userId": "U0002",
    "userName": "Example",
    "phoneNumber": "123456789",
    "billId": "B0002",
    "invoiceNumber": "IV0002",
    "vendorDetails": {
      "vendorId": "V0002",
      "vendorName": "Reliance Trends",
      "vendorAddress": ""
    },
    "products": [
      {
        "productId": "P001",
        "productName": "Maggie",
        "quantity": 1,
        "rate": 15,
        "discount": 0,
        "amount": 15
      },
      {
        "productId": "P002",
        "productName": "Parle G",
        "quantity": 5,
        "rate": 10,
        "discount": 0,
        "amount": 50
      },
      {
        "productId": "P003",
        "productName": "Peanut Butter",
        "quantity": 1,
        "rate": 12,
        "discount": 0,
        "amount": 20
      },
      {
        "productId": "P004",
        "productName": "Shampoo",
        "quantity": 5,
        "rate": 10,
        "discount": 0,
        "amount": 50
      }
    ],
    "orderDate": "2020/07/05",
    "totalAmount": 5000,
    "totalDiscount": 0,
    "payableAmount": 0,
    "paymentMode": "Cash|Online"
  },
  {
    "userId": "U0003",
    "userName": "Example",
    "phoneNumber": "123456789",
    "billId": "B0003",
    "invoiceNumber": "IV0003",
    "vendorDetails": {
      "vendorId": "V0003",
      "vendorName": "Reliance Wallmart",
      "vendorAddress": ""
    },
    "products": [
      {
        "productId": "P001",
        "productName": "Maggie",
        "quantity": 1,
        "rate": 10,
        "discount": 0,
        "amount": 10
      },
      {
        "productId": "P002",
        "productName": "Parle G",
        "quantity": 5,
        "rate": 10,
        "discount": 0,
        "amount": 50
      },
      {
        "productId": "P003",
        "productName": "Peanut Butter",
        "quantity": 1,
        "rate": 12,
        "discount": 0,
        "amount": 40
      },
      {
        "productId": "P004",
        "productName": "Shampoo",
        "quantity": 5,
        "rate": 10,
        "discount": 0,
        "amount": 50
      }
    ],
    "orderDate": "2020/07/01",
    "totalAmount": 5000,
    "totalDiscount": 0,
    "payableAmount": 0,
    "paymentMode": "Cash|Online"
  }
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  title = 'app';
  productsHistory: any = [];
  searchText = '';
  bills = BILL_DATA;
  allProducts: any;
  uniqueProducts: any;
  displayedColumns: string[] = ['orderDate', 'productName', 'vendorName', 'amount'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  myControl = new FormControl();

  ngOnInit() {
    this.productsHistory.sort = this.sort;
    this.allProducts = this.filterUniqueProducts(this.bills);
    this.uniqueProducts = this.removeDuplicatesBy(x => x.productId, this.allProducts);
  }

  getProductHistory(product: any) {
    if (!product) {
      this.productsHistory = [];
      return;
    }
    let productList: any = [];
    this.bills.map(bill => {
      bill.products.map(pro => {
        if (pro.productName === product.productName) {
          pro.vendorName = bill.vendorDetails.vendorName;
          pro.orderDate = bill.orderDate;
          productList.push(pro);
        }
      })
    })
    this.productsHistory = productList;
  }

  private removeDuplicatesBy(keyFn, array) {
    var mySet = new Set();
    return array.filter(function (x) {
      var key = keyFn(x), isNew = !mySet.has(key);
      if (isNew) mySet.add(key);
      return isNew;
    });
  }

  private filterUniqueProducts(bills: any[]) {
    let products = [];
    bills.map(bill => {
      bill.products.map(product => {
        products.push(product);
      });
    });
    return products;
  }
}
