import { Injectable } from '@angular/core';
import { IFood } from '../home/IFood';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foods: IFood[] = [
    { id: 1, name: "Potato", image: "Potato.jpg", price: 2.5 }, { id: 2, name: "Pasta", image: "Pasta.jpg", price: 7 }, { id: 3, name: "Rice", image: "Rice.jpg", price: 24 },
    { id: 4, name: "Chicken", image: "Chicken.jpg", price: 20 }, { id: 5, name: "Apple", image: "Apple.jpg", price: 1.5 }, { id: 6, name: "Fish", image: "Fish.jpg", price: 25 },
    { id: 7, name: "Eggs", image: "Eggs.jpg", price: 10 }, { id: 8, name: "Cheeses", image: "Cheeses.jpg", price: 8 }, { id: 9, name: "Popcorn", image: "Popcorn.jpg", price: 5 }
  ];

  constructor() { }

  getFoods(): IFood[] {
    return this.foods;
  }
}
