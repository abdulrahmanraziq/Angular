import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstemplate',
  templateUrl: './userstemplate.component.html',
  styleUrls: ['./userstemplate.component.css']
})
export class UserstemplateComponent implements OnInit {
 person:any;
  constructor() { }

  ngOnInit() {
   this.person=[{FirstName: 'Abdul', LastName: 'Rahman', Age: '76'},
   {FirstName: 'Sathish', LastName: 'Durai', Age: '50'},
   {FirstName: 'Chella', LastName: 'Durai', Age: '150'},
   {FirstName: 'Dinesh', LastName: 'Durai', Age: '100'},
  ];
  }

}
