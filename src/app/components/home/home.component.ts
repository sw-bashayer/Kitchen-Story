import { CartService } from './../cart/cart-service/cart.service';
import { FoodService } from './../food/food.service';
import { IFood } from './IFood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Kitchen Story";

  food_list: IFood[] = [];
  _searchTerm: string = "";
  searchedItems: IFood[] | undefined;

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.searchedItems = this.searchTerm ? this.performSearch(this.searchTerm) : this.food_list;
  }

  constructor(private foodservice: FoodService, private cartservice: CartService) { }

  ngOnInit(): void {
    this.food_list = this.foodservice.getFoods();
    this.searchedItems = this.food_list;
  }

  performSearch(searchBy: string): IFood[] {
    searchBy = searchBy.toLocaleLowerCase();
    return this.food_list.filter((food: IFood) => food.name.toLocaleLowerCase().indexOf(searchBy) !== -1);
  }

  addToCart(item: IFood) {
    this.cartservice.addToCart(item);
    console.log(item);
  }
}
