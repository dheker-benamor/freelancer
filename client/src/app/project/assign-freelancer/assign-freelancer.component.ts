import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProjectService} from "../../Service/project.service";
import {FreelancerService} from "../../Service/freelancer.service";

@Component({
  selector: 'app-assign-freelancer',
  templateUrl: './assign-freelancer.component.html',
  styleUrls: ['./assign-freelancer.component.css']
})
export class AssignFreelancerComponent implements OnInit {
  projectId;
  freelancerId;
  projects= [];
  freelancers = [];
  constructor(private router: Router,private projectService :ProjectService,private freelancerService :FreelancerService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => this.projects = data);
    this.freelancerService.getFreelancers().subscribe(data => this.freelancers = data);

  }

    Assign() {
      this.projectService.assignFreelancer(this.projectId,this.freelancerId).subscribe(data => this.router.navigateByUrl('/project'))

    }
}
