import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../Service/project.service";
import {FreelancerService} from "../Service/freelancer.service";

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {
  freelancers = [];
  constructor(private freelancerService :FreelancerService) { }

  ngOnInit(): void {
    this.freelancerService.getFreelancers().subscribe(data => this.freelancers = data);

  }

}
