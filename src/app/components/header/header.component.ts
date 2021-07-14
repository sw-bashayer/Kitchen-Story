import { CartService } from './../cart/cart-service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private cartTotal: number = 0;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }

  getNumOfCartItem(): number {
    return this.cartservice.getNumOfCartItem();

  }

}
