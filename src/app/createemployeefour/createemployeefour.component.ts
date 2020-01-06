import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createemployeefour',
  templateUrl: './createemployeefour.component.html',
  styleUrls: ['./createemployeefour.component.css']
})
export class CreateemployeefourComponent implements OnInit {

  employeeForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      firstname : new FormControl('', Validators.required),
      lastname : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }

}
