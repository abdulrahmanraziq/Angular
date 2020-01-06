import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-userreactiveform',
  templateUrl: './userreactiveform.component.html',
  styleUrls: ['./userreactiveform.component.css']
})
export class UserreactiveformComponent implements OnInit {
  name=new FormControl('');
  updateName(){
    this.name.setValue('abdul')
  }
  constructor() { }

  ngOnInit() {
  }

}
