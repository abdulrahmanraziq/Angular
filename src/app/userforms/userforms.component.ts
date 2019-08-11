import { Component, OnInit } from '@angular/core';
import { UserformsService } from './userforms.service';
@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.css']
})
export class UserformsComponent implements OnInit {
  model = { firstName: "", lastName: "", email: "", password: "" }
  device: any;
  constructor(private api: UserformsService) { }
  ngOnInit() {
    this.getData();
  }
  onSubmit(data) {
    console.log(data);
    this.device = data;
  }
  getData() {
    this.api.getBooks()
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
  }
}
