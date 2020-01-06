import { Component, OnInit } from '@angular/core';
import { loginOne } from './beer';
import { loginTwo} from './wine';
@Component({
  selector: 'app-userlogin-one',
  templateUrl: './userlogin-one.component.html',
  styleUrls: ['./userlogin-one.component.css']
})
export class UserloginOneComponent implements OnInit {

  bottle = loginTwo;
  tabs : loginOne;

  constructor() { }

  ngOnInit() {
  }
  onSelect(hero:loginOne):void{
    this.tabs = hero;
  }
}
