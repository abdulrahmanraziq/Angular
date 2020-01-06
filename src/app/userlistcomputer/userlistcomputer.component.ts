import { Component, OnInit, Input } from '@angular/core';
import {usama} from '../userlistdevice/charger';
@Component({
  selector: 'app-userlistcomputer',
  templateUrl: './userlistcomputer.component.html',
  styleUrls: ['./userlistcomputer.component.css']
})
export class UserlistcomputerComponent implements OnInit {
  @Input() hero : usama;

  constructor() { }

  ngOnInit() {
  }

}
