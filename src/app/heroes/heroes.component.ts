import { Component, OnInit } from '@angular/core';
import {signUp} from './mock';
import{loginUp} from './grid';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
device = loginUp;
data : signUp;

constructor() { }

  ngOnInit() {
  }
onSelect(hero : signUp):void{
  this.data=hero;
}


receivedData(event){
  console.log(event);
}

}
