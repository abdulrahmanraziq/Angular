import { Component, OnInit, Input } from '@angular/core';
import {userdataOne} from '../usersinputs/iron';

@Component({
  selector: 'app-userinputs-two',
  templateUrl: './userinputs-two.component.html',
  styleUrls: ['./userinputs-two.component.css']
})
export class UserinputsTwoComponent implements OnInit {
@Input()hero : userdataOne;
  constructor() { }

  ngOnInit() {
  }

}
