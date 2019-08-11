import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
model={firstName:"", password:""};
onSubmit(){
  
}
  constructor() { }

  ngOnInit() {
  }
  
}
