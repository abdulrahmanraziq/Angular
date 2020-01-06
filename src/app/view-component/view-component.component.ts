import { Component, OnInit } from '@angular/core';
import {ViewComponentService} from './view-component.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
body : string = "";
response : any;
  constructor(private http : HttpClient) {}

  ngOnInit() {
   
  }
  search(){
    this.http.get('https://jsonplaceholder.typicode.com/posts' + this.body)
    .subscribe((response)  => {
      this.response = response;
      console.log(this.response);
    })
}
}
