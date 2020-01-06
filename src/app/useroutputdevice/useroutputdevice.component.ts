import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-useroutputdevice',
  templateUrl: './useroutputdevice.component.html',
  styleUrls: ['./useroutputdevice.component.css']
})
export class UseroutputdeviceComponent implements OnInit {
@Output() sendName = new EventEmitter<string>();
  constructor() { }
  storeName(){
    this.sendName.emit('Hi How are u')
  }
  ngOnInit() {
  }

}
