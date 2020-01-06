import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createemployeefive',
  templateUrl: './createemployeefive.component.html',
  styleUrls: ['./createemployeefive.component.css']
})
export class CreateemployeefiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value : any){
    console.log(value);
  }

}
