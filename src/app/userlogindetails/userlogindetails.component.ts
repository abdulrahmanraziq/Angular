import { Component, OnInit, Input } from '@angular/core';
import {loginOne} from '../userlogin-one/beer';
@Component({
  selector: 'app-userlogindetails',
  templateUrl: './userlogindetails.component.html',
  styleUrls: ['./userlogindetails.component.css']
})
export class UserlogindetailsComponent implements OnInit {

  @Input() hero:loginOne;
  constructor() { }

  ngOnInit() {
  }

}
