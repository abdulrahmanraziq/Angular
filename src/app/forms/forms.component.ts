import { Component, OnInit } from '@angular/core';
import { computer } from './bed';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  table :computer = {
    id:1,
    name:'abdul'
  };

  constructor() { }

  ngOnInit() {
  }

}
