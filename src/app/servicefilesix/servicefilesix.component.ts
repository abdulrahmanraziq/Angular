import { Component, OnInit } from '@angular/core';
import {ServicefilesixService} from './servicefilesix.service';

@Component({
  selector: 'app-servicefilesix',
  templateUrl: './servicefilesix.component.html',
  styleUrls: ['./servicefilesix.component.css']
})
export class ServicefilesixComponent implements OnInit {

  constructor(public api : ServicefilesixService) { }
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
