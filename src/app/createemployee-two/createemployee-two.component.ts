import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-createemployee-two',
  templateUrl: './createemployee-two.component.html',
  styleUrls: ['./createemployee-two.component.css']
})
export class CreateemployeeTwoComponent implements OnInit {
  employeeForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      fullname : new FormControl(),
      email : new FormControl(),
      password : new FormControl()
    });

  }

  onSubmit():void{
    console.log(this.employeeForm.touched);
  }

}
