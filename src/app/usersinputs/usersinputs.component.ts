import { Component, OnInit } from '@angular/core';
import {userdataOne} from './iron';
import {userdataTwo} from './balm';

@Component({
  selector: 'app-usersinputs',
  templateUrl: './usersinputs.component.html',
  styleUrls: ['./usersinputs.component.css']
})
export class UsersinputsComponent implements OnInit {

device = userdataTwo;
computer : userdataOne;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero : userdataOne):void{
    this.computer = hero;
  }


}
