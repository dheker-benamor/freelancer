import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../Service/project.service";

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {


  project ;
  constructor(private router: Router,private _Activatedroute:ActivatedRoute,private projectService :ProjectService) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params =>

      this.projectService.getProjectById(params.get('id')).subscribe(data => this.project =data));
    }
  updateProject() : void {
    this.projectService.updateProject(this.project).subscribe(data => this.router.navigateByUrl('/project'));

  }

}


