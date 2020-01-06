import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-createemployeesix',
  templateUrl: './createemployeesix.component.html',
  styleUrls: ['./createemployeesix.component.css']
})
export class CreateemployeesixComponent implements OnInit {

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
  onSubmit(){
    console.log(this.employeeForm.value);
  }

}
