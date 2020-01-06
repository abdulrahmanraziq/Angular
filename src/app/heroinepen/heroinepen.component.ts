import { Component, OnInit } from '@angular/core';
import {userOne} from './herone';
import {userTwo} from './mockherone';

@Component({
  selector: 'app-heroinepen',
  templateUrl: './heroinepen.component.html',
  styleUrls: ['./heroinepen.component.css']
})
export class HeroinepenComponent implements OnInit {

  storage = userTwo;
  device:userOne;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(fetch: userOne):void{
    this.device = fetch;
  }
}
