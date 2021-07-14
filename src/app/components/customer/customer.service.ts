import { CartService } from 'src/app/components/cart/cart-service/cart.service';
import { IFood } from './../home/IFood';
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
    console.log(this.orders);
  }


  confirmPurchase(firstName: string, lastName: string, addrs: string, foodlist: IFood[]) {



  }
}
