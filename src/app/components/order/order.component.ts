import { ICustomer_order } from './../customer/ICustomer_order';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  OrderList: ICustomer_order[] = [];


  constructor(private customerservice: CustomerService) { }

  ngOnInit(): void {
    this.OrderList = this.customerservice.getOrders();
  }

}
