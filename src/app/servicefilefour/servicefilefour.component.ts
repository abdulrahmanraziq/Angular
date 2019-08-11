import { Component, OnInit } from '@angular/core';
import {ServicefilefourService} from './servicefilefour.service'

@Component({
  selector: 'app-servicefilefour',
  templateUrl: './servicefilefour.component.html',
  styleUrls: ['./servicefilefour.component.css']
})
export class ServicefilefourComponent implements OnInit {

  constructor(public api : ServicefilefourService) { }

  books:any;

  ngOnInit() {
  }
  getData(){
    this.api.getBooks()
    .subscribe(res => {
      console.log(res);
      this.books = res;
    }, 
    err => {
      console.log(err);
    });
  }

  getData2(id:any){
    //console.log(id);
    console.log(id.id, id.title);
    //console.log(id.userId);
  }
 
}

