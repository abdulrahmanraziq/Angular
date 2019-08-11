import { Component, OnInit } from '@angular/core';
import {userprofileOne} from './phone';
import {userprofileTwo} from './mobile';
@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.css']
})
export class ProfilingComponent implements OnInit {
  
  formuser:userprofileOne;
  loginuser = userprofileTwo;
  
  constructor() { }

  ngOnInit() {
  }

}
