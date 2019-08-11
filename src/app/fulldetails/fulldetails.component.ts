import { Component, OnInit } from '@angular/core';
import {userOne} from './desktop';
import {userTwo} from './computer';

@Component({
  selector: 'app-fulldetails',
  templateUrl: './fulldetails.component.html',
  styleUrls: ['./fulldetails.component.css']
})
export class FulldetailsComponent implements OnInit {

form = userTwo;
login:userOne;

  constructor() { }

  ngOnInit() {
  }

}
