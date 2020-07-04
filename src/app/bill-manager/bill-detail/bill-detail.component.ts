import { Component } from '@angular/core';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.scss']
})
export class BillDetailComponent {

  billDetails = {
    userId: 'U0001',
    userName: 'Example',
    phoneNumber: '123456789',
    billId: 'B0001',
    invoiceNumber: 'IV0001',
    vendorDetails: {
      vendorId: 'V0001',
      vendorName: 'Big Bazaar',
      vendorAddress: 'Jaipur'
    },
    products: [
      {
        productId: 'P001',
        productName: 'Maggie',
        quantity: 1,
        rate: 12,
        discount: 10,
        amount: 12
      },
      {
        productId: 'P002',
        productName: 'Parle G',
        quantity: 5,
        rate: 10,
        discount: 5,
        amount: 50
      }
    ],
    orderDate: '',
    totalAmount: 5000,
    totalDiscount: 15,
    payableAmount: 4985,
    paymentMode: 'Cash | Online'
  };
}
