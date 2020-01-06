import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-userreactiveformtest',
  templateUrl: './userreactiveformtest.component.html',
  styleUrls: ['./userreactiveformtest.component.css']
})
export class UserreactiveformtestComponent implements OnInit {

  employeeForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
    
  }
  
}
