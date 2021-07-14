import { Component, OnInit } from '@angular/core';
import { IFood } from '../home/IFood';
import { CartService } from 'src/app/components/cart/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = "Cart";
  cartItems: IFood[] = [];
  cartTotal: number = 0;
  AllFoodItems: IFood[] = [];
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartservice.getCartItems();
    this.cartTotal = this.cartservice.getCartTotal();
  }

  deleteFromCart(item: IFood) {
    this.cartservice.deleteFromCart(item);
    this.cartItems = this.cartservice.getCartItems();
    this.cartTotal = this.cartservice.getCartTotal();
    /*this.cartItems.forEach((element, index) => {
      if (element == item) delete this.cartItems[index];
    });*/
  }

}
