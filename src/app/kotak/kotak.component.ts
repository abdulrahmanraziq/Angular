import { Component, OnInit } from '@angular/core';
import { deviceone } from './bank';
import { devicetwo } from './insurance';

@Component({
  selector: 'app-kotak',
  templateUrl: './kotak.component.html',
  styleUrls: ['./kotak.component.css']
})
export class KotakComponent implements OnInit {

  
  device = devicetwo;
  computer : deviceone;

  constructor() { }

  ngOnInit() {
  }
  myfunction( hero : deviceone ):void{
    this.computer = hero;
  }
}
