import { Component, OnInit } from '@angular/core';
import {userOne} from './hero';
import {userTwo} from './mockhero';

@Component({
  selector: 'app-heropen',
  templateUrl: './heropen.component.html',
  styleUrls: ['./heropen.component.css']
})
export class HeropenComponent implements OnInit {
  
  computer = userTwo;
  device:userOne;
  
  constructor() { }

  ngOnInit() {
  }
  onSelect (laptop : userOne):void{
    this.device=laptop;
  }

}
