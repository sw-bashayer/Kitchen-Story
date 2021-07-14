import { IFood } from './../../home/IFood';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: IFood[] = [];
  private cartTotal: number = 0;

  constructor() { }

  getCartItems(): IFood[] {
    return this.cartItems;
  }
  getCartTotal(): number {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price);
    })

    return this.cartTotal;
  }

  addToCart(item: IFood) {
    this.cartItems.push(item);
  }

  deleteFromCart(itemToBeDeleted: IFood) {
    this.cartTotal -= itemToBeDeleted.price;
    this.cartItems = this.cartItems.filter(item => item !== itemToBeDeleted);

  }

  getNumOfCartItem(): number {
    return this.cartItems.length;
  }
  deleteAllItems() {
    this.cartItems = [];
  }
}

