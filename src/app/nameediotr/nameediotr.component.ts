import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-nameediotr',
  templateUrl: './nameediotr.component.html',
  styleUrls: ['./nameediotr.component.css']
})
export class NameediotrComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  updateName() {
    this.name.setValue('Nancy');
  }

  ngOnInit() {
  }

}
