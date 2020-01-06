import { Component, OnInit, Input } from '@angular/core';
import {userOne} from '../useraysha/bari';
@Component({
  selector: 'app-userusama',
  templateUrl: './userusama.component.html',
  styleUrls: ['./userusama.component.css']
})
export class UserusamaComponent implements OnInit {

  @Input() hero:userOne;
  constructor() { }

  ngOnInit() {
  }

}
