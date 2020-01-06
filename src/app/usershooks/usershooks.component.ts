import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-usershooks',
  templateUrl: './usershooks.component.html',
  styleUrls: ['./usershooks.component.css']
})
export class UsershooksComponent implements OnInit {
name = "Dai Badu Abdul";
  constructor() { }
  show = false;
  

  toggle(){
    this.show = !this.show;
  }
  ngOnInit() {
    console.log("Template Initialzised");
  }
}
