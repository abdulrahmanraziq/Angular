import { Component, OnInit } from '@angular/core';
import {userOne} from './bari';
import {userTwo} from './begum';

@Component({
  selector: 'app-useraysha',
  templateUrl: './useraysha.component.html',
  styleUrls: ['./useraysha.component.css']
})
export class UserayshaComponent implements OnInit {

device = userTwo;
data:userOne;

  constructor() { }

 onSelect(hero:userOne):void{
   this.data=hero;
 }
  ngOnInit() {
  }

}
