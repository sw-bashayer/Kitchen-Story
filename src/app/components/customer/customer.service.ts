import { ICustomer_order } from './ICustomer_order';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private orders: ICustomer_order[] = [];
  constructor() { }

  getOrders(): ICustomer_order[] {
    return this.orders;
  }
  addOrder(order: ICustomer_order) {
    this.orders.push(order);
  }
}
