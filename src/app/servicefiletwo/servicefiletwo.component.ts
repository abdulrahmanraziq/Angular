import { Component, OnInit } from '@angular/core';
import {ServicefiletwoService} from './servicefiletwo.service';


@Component({
  selector: 'app-servicefiletwo',
  templateUrl: './servicefiletwo.component.html',
  styleUrls: ['./servicefiletwo.component.css']
})
export class ServicefiletwoComponent implements OnInit {

  constructor(public api : ServicefiletwoService) { }
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
    console.log(id);
    //console.log(id.id, id.title);
    //console.log(id.userId);
  }
 
}
