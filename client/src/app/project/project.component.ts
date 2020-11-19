import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../Service/project.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects = [];
  constructor(private ps :ProjectService) { }
  todayDate = new Date();

  ngOnInit(): void {
    this.ps.getProjects().subscribe(data => this.projects = data);
  }
  compareDates(start): boolean {
    const startDate = new Date(start);
    if(this.todayDate.getFullYear() < startDate.getFullYear()){
      return true
    }
    else {
      if (this.todayDate.getMonth() < startDate.getMonth()){
        return true

      }
      else {
        return this.todayDate.getDate() <= startDate.getDate();
      }
    }


  }
  deleteProject(projectId){
    this.ps.deleteProject(projectId).subscribe(success =>     this.ps.getProjects().subscribe(data => this.projects = data));
  }
}
