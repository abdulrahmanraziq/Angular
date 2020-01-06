import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-userdashboard-two',
  templateUrl: './userdashboard-two.component.html',
  styleUrls: ['./userdashboard-two.component.css']
})
export class UserdashboardTwoComponent implements OnInit {

  Designation : any;
  UserName : any;
  NoOfTeamMembers : any;
  TotalCostOfAllProjects : any;
  pendingTask : any;
  UpcomingProjects : any;
  ProjectCost : any;
  CurrentExpenditure : any;
  AvailableFunds : any;
  
  Clients :  string[];
  Projects : any[];
  Years : any[] = [];
  TeamMemberSummary = [];
  TeamMembers = [];

  fetchOne:any;

  constructor(private test : TestService) { }

  ngOnInit() {
    this.Designation = "Team Leader";
    this.UserName = "Abdul";
    this.NoOfTeamMembers = 25;
    this.TotalCostOfAllProjects = 100000
    this.pendingTask = 600;
    this.UpcomingProjects = 200;
    this.ProjectCost = 1000;
    this.CurrentExpenditure = 100000;
    this.AvailableFunds = 100000000;

    this.Clients = [
      "ABC Infotech LTD",
      "DEF Software Solutions",
      "GHI Industries"
    ];

    this.Projects = [
      "Projects A",
      "Projects B",
      "Projects C",
      "Projects D",
    ];

    for(var i = 2019; i >= 2010; i-- ){
      this.Years.push(i);
    }

    this.TeamMemberSummary = [
      { Region:"East",TeamMemberCount : 20, TemporarlyUnavailableMember : 4 },
      { Region:"West",TeamMemberCount : 100, TemporarlyUnavailableMember : 3 },
      { Region:"North",TeamMemberCount : 55, TemporarlyUnavailableMember : 5 },
      { Region:"South",TeamMemberCount : 1000, TemporarlyUnavailableMember : 10 },
    ];

    this.TeamMembers = [
      {Region : "East", Members: [
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"Miller", Status:"Available"},
        {ID:3, Name:"Jones", Status:"Busy"},
        {ID:4, Name:"James", Status:"Busy"},
      ]},
      {Region : "West", Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"Miller", Status:"Available"},
        {ID:3, Name:"Jones", Status:"Busy"},
        {ID:4, Name:"James", Status:"Busy"},
      ]},
      {Region : "North", Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"Miller", Status:"Available"},
        {ID:3, Name:"Jones", Status:"Busy"},
        {ID:4, Name:"James", Status:"Busy"},
      ]},
      {Region : "south", Members:[
        {ID:1, Name:"Ford", Status:"Available"},
        {ID:2, Name:"Miller", Status:"Available"},
        {ID:3, Name:"Jones", Status:"Busy"},
        {ID:4, Name:"James", Status:"Busy"},
      ]},
    ];
  }
  onProjectChange($event){
    if($event.target.innerHTML == "Projects A"){
      this.ProjectCost = 1000;
      this.CurrentExpenditure = 100000;
      this.AvailableFunds = 100000000;
    }
    else if($event.target.innerHTML == "Projects B"){
      this.ProjectCost = 500;
      this.CurrentExpenditure = 50000;
      this.AvailableFunds = 50000000;
    }
    else if($event.target.innerHTML == "Projects C"){
      this.ProjectCost = 50000;
      this.CurrentExpenditure = 5100000;
      this.AvailableFunds = 600000000;
    }
    else if($event.target.innerHTML == "Projects D"){
      this.ProjectCost = 50000;
      this.CurrentExpenditure = 7000;
      this.AvailableFunds = 70000000;
    }
  }

  fetch(){
    this.test.fetch().subscribe(data => console.log(data));
  }



}
