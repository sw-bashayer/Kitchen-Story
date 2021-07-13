import { IFood } from './IFood';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food_list: IFood[] = [
    { id: 1, name: "Potato", image: "Potato.jpg", price: 2.5 }, { id: 2, name: "Pasta", image: "Pasta.jpg", price: 7 }, { id: 3, name: "Rice", image: "Rice.jpg", price: 24 },
    { id: 4, name: "Chicken", image: "Chicken.jpg", price: 20 }, { id: 5, name: "Apple", image: "Apple.jpg", price: 1.5 }, { id: 6, name: "Fish", image: "Fish.jpg", price: 25 },
    { id: 7, name: "Eggs", image: "Eggs.jpg", price: 10 }, { id: 8, name: "Cheeses", image: "Cheeses.jpg", price: 8 }, { id: 9, name: "Popcorn", image: "Popcorn.jpg", price: 5 }
  ]
  _searchTerm: string = "";
  searchedItems: IFood[] | undefined;

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.searchedItems = this.searchTerm ? this.performSearch(this.searchTerm) : this.food_list;
  }

  constructor() { }

  ngOnInit(): void {
    this.searchedItems = this.food_list;
  }

  performSearch(searchBy: string): IFood[] {
    searchBy = searchBy.toLocaleLowerCase();
    return this.food_list.filter((food: IFood) => food.name.toLocaleLowerCase().indexOf(searchBy) !== -1);
  }
}
