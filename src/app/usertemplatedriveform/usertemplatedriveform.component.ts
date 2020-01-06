import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertemplatedriveform',
  templateUrl: './usertemplatedriveform.component.html',
  styleUrls: ['./usertemplatedriveform.component.css']
})
export class UsertemplatedriveformComponent implements OnInit {
  model={firstName:"", password:""};
  onSubmit(){
    
  }
  constructor() { }

  ngOnInit() {
  }

}
