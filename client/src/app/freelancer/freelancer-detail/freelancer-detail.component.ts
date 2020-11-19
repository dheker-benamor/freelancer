import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../Service/project.service";
import {FreelancerService} from "../../Service/freelancer.service";

@Component({
  selector: 'app-freelancer-detail',
  templateUrl: './freelancer-detail.component.html',
  styleUrls: ['./freelancer-detail.component.css']
})
export class FreelancerDetailComponent implements OnInit {
  freelancer;

  constructor(private _Activatedroute:ActivatedRoute,private freelancerService :FreelancerService) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => {
      this.freelancerService.getFreelancerById(params.get('id')).subscribe(data => this.freelancer =data)
    });
  }



}


