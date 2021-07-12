import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food_list = [
    [{ "id": 1, "name": "Potato", image: "1.jpg" }, { "id": 2, "name": "Pasta", image: "2.jpg" }, { "id": 3, "name": "Rice", image: "3.jpg" }],
    [{ "id": 4, "name": "c", image: "4.jpg" }, { "id": 5, "name": "d", image: "5.jpg" }, { "id": 6, "name": "e", image: "6.jpg" }],
    [{ "id": 7, "name": "f", image: "7.jpg" }, { "id": 8, "name": "g", image: "8.jpg" }, { "id": 9, "name": "m", image: "9.jpg" }]
  ]
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

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
