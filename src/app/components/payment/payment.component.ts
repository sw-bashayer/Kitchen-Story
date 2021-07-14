import { CustomerService } from './../customer/customer.service';
import { ICustomer_order } from './../customer/ICustomer_order';
import { IFood } from './../home/IFood';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart-service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  Name: string = "";
  Address: string = "";
  totalPrice: number = 0;
  Payment: string = "Cash";
  cartList: IFood[] = [];
  totalNumOfProduct: number = 0;
  customerOrders: ICustomer_order[] = [];
  alert = false;


  constructor(private cartservice: CartService, private customerservice: CustomerService) { }

  ngOnInit(): void {
    this.cartList = this.cartservice.getCartItems();
    this.totalPrice = this.cartservice.getCartTotal();
    this.totalNumOfProduct = this.cartservice.getNumOfCartItem();
  }
  confirmPayment() {
    this.cartList = this.cartservice.getCartItems();
    this.totalPrice = this.cartservice.getCartTotal();
    this.customerservice.addOrder({ name: this.Name, address: this.Address, totalprice: this.totalPrice, paymentType: this.Payment, orderlist: this.cartList });
    console.log(this.customerservice.getOrders());
    this.alert = true;
    this.cartservice.deleteAllItems();
  }

}
