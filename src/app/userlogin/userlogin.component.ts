import { Component, OnInit } from '@angular/core';
import { UserloginService } from '../userlogin.service';
import {Loginviewmodel} from '../loginviewmodel';
import {Router} from '@angular/router';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loginviewmodels : Loginviewmodel = new Loginviewmodel();
  loginError : string ="";

  constructor(private UserLogin : UserloginService, private router : Router) { }

  ngOnInit() {
  }
  OnLooginClick(){
    this.UserLogin.Login(this.loginviewmodels).subscribe(
      (response)=>{
        this.router.navigateByUrl("/userdashboard");
      },
      (error) =>{
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }
}
