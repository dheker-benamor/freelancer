import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProjectService} from "../../Service/project.service";
import {FreelancerService} from "../../Service/freelancer.service";

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.css']
})
export class AddFreelancerComponent implements OnInit {
  freelancer = { name: "", email: "", phone: "", address: "", website: "" };
  constructor(private router: Router,private freelancerService :FreelancerService) { }

  ngOnInit(): void {
  }
  createFreelancer() : void {
    this.freelancerService.createFreelancer(this.freelancer).subscribe(data => this.router.navigateByUrl('/freelancer'));

  }

}
