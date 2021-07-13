import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food_list = [
    [{ "id": 1, "name": "Potato", image: "Potato.jpg" }, { "id": 2, "name": "Pasta", image: "Pasta.jpg" }, { "id": 3, "name": "Rice", image: "Rice.jpg" }],
    [{ "id": 4, "name": "Chicken", image: "Chicken.jpg" }, { "id": 5, "name": "Apple", image: "Apple.jpg" }, { "id": 6, "name": "Fish", image: "Fish.jpg" }],
    [{ "id": 7, "name": "Eggs", image: "Eggs.jpg" }, { "id": 8, "name": "Cheeses", image: "Cheeses.jpg" }, { "id": 9, "name": "Popcorn", image: "Popcorn.jpg" }]
  ]
  searchTerm = "";
  /*
  foods_list = [
    {
      id: 1,
      name: "Potato",
      desc: "ppppp",
      image: "1.jpg",
    }
    ,
    {
      id: 2,
      name: "Pasta",
      desc: "ppppp",
      image: "2.jpg",
    },
    {
      id: 3,
      name: "Rice",
      desc: "ppppp",
      image: "3.jpg",
    },
    {
      id: 3,
      name: "Rice",
      desc: "ppppp",
      image: "3.jpg",
    },

  ]*/

  constructor() { }

  ngOnInit(): void {
  }

}
