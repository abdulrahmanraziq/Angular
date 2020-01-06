import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-output-one',
  templateUrl: './user-output-one.component.html',
  styleUrls: ['./user-output-one.component.css'],
})
export class UserOutputOneComponent implements OnInit {
  products = [];
  title = 'Products';
  constructor() { }

  ngOnInit() {
    this.products = this.getProducts();
  }
  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
  }
}
