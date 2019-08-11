import { Component, OnInit, Input } from '@angular/core';
import {deviceone} from '../kotak/bank'

@Component({
  selector: 'app-hdfc',
  templateUrl: './hdfc.component.html',
  styleUrls: ['./hdfc.component.css']
})
export class HdfcComponent implements OnInit {
@Input() hero:deviceone
  constructor() { }

  ngOnInit() {
  }

}
