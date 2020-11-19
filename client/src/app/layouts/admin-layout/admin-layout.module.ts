import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProjectComponent} from "../../project/project.component";
import {HttpClientModule} from "@angular/common/http";
import {AddProjectComponent} from "../../project/add-project/add-project.component";
import {UpdateProjectComponent} from "../../project/update-project/update-project.component";
import {ProjectDetailComponent} from "../../project/project-detail/project-detail.component";
import {FreelancerComponent} from "../../freelancer/freelancer.component";
import {AddFreelancerComponent} from "../../freelancer/add-freelancer/add-freelancer.component";
import {FreelancerDetailComponent} from "../../freelancer/freelancer-detail/freelancer-detail.component";
import {AssignFreelancerComponent} from "../../project/assign-freelancer/assign-freelancer.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AssignFreelancerComponent,


    ProjectComponent,
    AddProjectComponent,
    UpdateProjectComponent,
    ProjectDetailComponent,

    FreelancerComponent,
    AddFreelancerComponent,
    FreelancerDetailComponent,

  ]
})

export class AdminLayoutModule {}
