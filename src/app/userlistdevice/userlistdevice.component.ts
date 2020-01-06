import { Component, OnInit } from '@angular/core';
import { usama } from './charger';
import { computer } from './life';


@Component({
  selector: 'app-userlistdevice',
  templateUrl: './userlistdevice.component.html',
  styleUrls: ['./userlistdevice.component.css']
})
export class UserlistdeviceComponent implements OnInit {

 /* laptop = computer;
  hardware : usama;
  constructor() { }
  
  onSelect(hero : usama){
    this.hardware=hero;
  }*/

  myName : any = ""
  receiveName(value:any){
    this.myName = value;
  }

  ngOnInit() {
  }

}
