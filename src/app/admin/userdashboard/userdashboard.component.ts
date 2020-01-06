import { Component, OnInit } from '@angular/core';
import { UserdashboardService } from "../../userdashboard.service";

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private dashboardService: UserdashboardService) { 

  }

  designation : any;
  username : any;
  teamname : any;
  noofteammember : any;
  totalcostofallprojects : any;
  pendingtask : any;
  upcomingprojects : any;
  projectcost : any;
  currentexpenditure: any;
  availablefunds : any;

  Clients : any[];
  Projects : any[];
  Years : any[];
  TeamMembersSummary : any[];
  ProjectBriefing : any[];
  

  ngOnInit() {
    this.designation = "Team Leader";
    this.username = "Abdul";
    this.teamname = "Website";
    this.noofteammember = 67;
    this.pendingtask = 15;
    this.upcomingprojects = 2;
    this.projectcost = 2113507;
    this.currentexpenditure = 96788;
    this.availablefunds = 53536;

    this.Clients = [
      "ABC Infotech Ltd", "DEF Software Solutions", "GHI Industries"
    ];
    this.Projects = [
      "Projects A", "Projects B", "Projects C", "Projects D"
    ];

    this.Years = [
      2019, 2018, 2017, 2016, 2015
    ];

     /*this.TeamMembersSummary = [
      {Region : "East", TeamMemberCount : 20, TemporarilyUnavailablemember : 4},
      {Region : "West", TeamMemberCount : 40, TemporarilyUnavailablemember : 8},
      {Region : "North", TeamMemberCount : 17, TemporarilyUnavailablemember : 1},
      {Region : "South", TeamMemberCount : 15, TemporarilyUnavailablemember : 6},
    ];*/


    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();


    this.ProjectBriefing = [

      { 
        Region : "EAST",Members: [
        {id : 1, name : "Ford", status : "Available" },
        {id : 2, name : "Honda", status : "Available" },
        {id : 3, name : "Jones", status : "Busy" },
        {id : 4, name : "James", status : "Busy" }
      ]
    },

      {
        Region : "WEST",Members: [
          {id : 1, name : "Ford", status : "Available" },
          {id : 2, name : "Honda", status : "Available" },
          {id : 3, name : "Jones", status : "Busy" },
          {id : 4, name : "James", status : "Busy" }
        ]
      },

      {
        Region : "NORTH",Members: [
          {id : 1, name : "Ford", status : "Available" },
          {id : 2, name : "Honda", status : "Available" },
          {id : 3, name : "Jones", status : "Busy" },
          {id : 4, name : "James", status : "Busy" }
        ]
      },

      {
        Region : "SOUTH",Members: [
          {id : 1, name : "Ford", status : "Available" },
          {id : 2, name : "Honda", status : "Available" },
          {id : 3, name : "Jones", status : "Busy" },
          {id : 4, name : "James", status : "Busy" }
        ]
      }
    ];
    
  }
  onProjectChange($event){
    if($event.target.innerHTML == "Projects A"){
    this.projectcost = 2113507;
    this.currentexpenditure = 96788;
    this.availablefunds = 53536;
    }
    else if ($event.target.innerHTML == "Projects B"){
    this.projectcost = 5844848;
    this.currentexpenditure = 874566;
    this.availablefunds = 34566;
    }
    else if ($event.target.innerHTML == "Projects C"){
      this.projectcost = 77565682;
      this.currentexpenditure = 66646462;
      this.availablefunds = 865664;
    }
    else if($event.target.innerHTML == "Projects D"){
      this.projectcost = 9949488;
      this.currentexpenditure = 66363663;
      this.availablefunds = 3664646;
    }
  }
}
