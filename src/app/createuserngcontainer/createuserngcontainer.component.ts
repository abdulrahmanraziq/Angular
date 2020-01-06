import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createuserngcontainer',
  templateUrl: './createuserngcontainer.component.html',
  styleUrls: ['./createuserngcontainer.component.css']
})
export class CreateuserngcontainerComponent implements OnInit {

  persons : any;

  constructor() { }

  ngOnInit():void {
    this.persons=[{FirstName : "Abdul", LastName: "Rahman", Age : 62},
    {FirstName : "Steve", LastName: "Rogers", Age : 112},
    {FirstName : "Tony", LastName: "Stark", Age : 46},
    {FirstName : "Bruce", LastName: "Banner", Age : 38}];
  }

}
