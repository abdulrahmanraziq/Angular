import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createemployeethree',
  templateUrl: './createemployeethree.component.html',
  styleUrls: ['./createemployeethree.component.css']
})
export class CreateemployeethreeComponent implements OnInit {

  employeeForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required ),
      email : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    });
  }
  onSubmit():void{
    console.log(this.employeeForm.value);
  }

}
