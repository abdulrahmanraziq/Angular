import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../projects.service';
import {Projects} from 'src/app/projects'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects : Projects[]
    newProjects : Projects = new Projects();
    editProjects : Projects = new Projects();
    editIndex:any = null;
    deleteProjects : Projects = new Projects();
    deleteIndex:any  = null;

  constructor (private projectservice : ProjectsService) { }

  ngOnInit() {
    this.projectservice.getAllProjects().subscribe(
      (response : Projects[]) => {
        this.projects = response;
      },
      (error) => {
        console.log(error);
        alert("Authentication Failed");
      }
    );
  }

  
  OnSaveClick(){
    this.projectservice.insertAllProjects(this.newProjects).subscribe((response) => {
      this.projects.push(this.newProjects);
      //this.newProjects.userId = null;
      //this.newProjects.id = null;
      //this.newProjects.title = null;
      //this.newProjects.body = null;
    }, (error) => {
      console.log(error);
    });
  }

  OnEditClick(event, index:any){
    this.editProjects.userId = this.projects[index].userId;
    this.editProjects.id = this.projects[index].id;
    this.editProjects.title = this.projects[index].title;
    this.editProjects.body = this.projects[index].body;
    this.editIndex = index;
  }
  
  OnUpdateClick(){
    this.projectservice.UpdateAllProjects(this.editProjects).subscribe((response : Projects) => {
      var p : Projects = new Projects();
      p.userId = response.userId;
      p.id = response.id;
      p.title = response.title;
      p.body = response.body;
      this.projects[this.editIndex] = p;
    }, () => {} )
  }

  OnDeleteClick(event, index:any){
    this.deleteIndex = index;
    this.deleteProjects.userId = this.projects[index].userId; 
    this.deleteProjects.id = this.projects[index].id; 
    this.deleteProjects.title = this.projects[index].title; 
    this.deleteProjects.body = this.projects[index].body; 
  }

  OnDeleteConfirmClick(){
    this.projectservice.DeleteAllProjects(this.deleteProjects.userId).subscribe(
      (response) => {
        this.projects.splice(this.deleteIndex, 1)
      },
      (error) => {
        console.log(error);
      });
  }

}
