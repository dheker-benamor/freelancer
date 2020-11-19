import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../Service/project.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  id;
  project ;
  constructor(private _Activatedroute:ActivatedRoute,private ps :ProjectService) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.ps.getProjectById(params.get('id')).subscribe(data => this.project =data)
    });
  }

}
