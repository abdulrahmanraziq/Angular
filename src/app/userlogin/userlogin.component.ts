import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalstorageService} from '../localstorage.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

 
  constructor(private storage : LocalstorageService, private router : Router) { }

  ngOnInit() {
    if (this.storage.get('loggedIn')){
      this.router.navigate(['/userdashboard']);
    }
  }
  login():void{
    this.storage.set('loggedIn', true);
    this.router.navigate(['/userdashboard']);
  }
  
}
