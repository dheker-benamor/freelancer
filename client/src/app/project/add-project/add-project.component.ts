import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectService} from "../../Service/project.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
   project = { name: "", startDate: "", endDate: "", duration: "", type: "" };

  constructor(private router: Router,private projectService :ProjectService) { }

  ngOnInit(): void {
  }
  createProject() : void {
    this.projectService.createProject(this.project).subscribe(data => this.router.navigateByUrl('/project'));

  }
}
