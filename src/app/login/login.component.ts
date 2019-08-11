import { Component, OnInit } from '@angular/core';
import { user } from './userOne';
import { register } from './userTwo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  device = register;
  form : user;

  constructor() { }

  ngOnInit() {
  }

  onSelect (computer: user):void{
    this.form=computer;
  }
}
