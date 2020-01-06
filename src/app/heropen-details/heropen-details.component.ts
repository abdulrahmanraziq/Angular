import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {signUp} from '../heroes/mock';
@Component({
  selector: 'app-heropen-details',
  templateUrl: './heropen-details.component.html',
  styleUrls: ['./heropen-details.component.css']
})
export class HeropenDetailsComponent implements OnInit {
@Input() hero:signUp;

@Output() sendData : EventEmitter<any> = new EventEmitter<any> ();

sendDataToparent(){
  this.sendData.emit('Hi this is abdul');
}
  ngOnInit() {
  }


}
