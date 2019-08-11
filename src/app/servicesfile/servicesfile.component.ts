import { Component, OnInit } from '@angular/core';
import {ServicesfileService} from './servicesfile.service'

@Component({
  selector: 'app-servicesfile',
  templateUrl: './servicesfile.component.html',
  styleUrls: ['./servicesfile.component.css']
})
export class ServicesfileComponent implements OnInit {

  constructor(public api : ServicesfileService) { }
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

}
