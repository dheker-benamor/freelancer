import { Routes } from '@angular/router';


import {ProjectComponent} from "../../project/project.component";
import {ProjectDetailComponent} from "../../project/project-detail/project-detail.component";
import {AddProjectComponent} from "../../project/add-project/add-project.component";
import {FreelancerComponent} from "../../freelancer/freelancer.component";
import {FreelancerDetailComponent} from "../../freelancer/freelancer-detail/freelancer-detail.component";
import {UpdateProjectComponent} from "../../project/update-project/update-project.component";
import {AddFreelancerComponent} from "../../freelancer/add-freelancer/add-freelancer.component";
import {AssignFreelancerComponent} from "../../project/assign-freelancer/assign-freelancer.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'project',        component: ProjectComponent },
    { path: 'project/details/:id',        component: ProjectDetailComponent },
    { path: 'project/update/:id',        component: UpdateProjectComponent },
    { path: 'project/create',        component: AddProjectComponent },
    { path: 'freelancer',        component: FreelancerComponent },
    { path: 'freelancer/details/:id',        component: FreelancerDetailComponent },
    { path: 'freelancer/create',        component: AddFreelancerComponent },
    { path: 'project/assignFreelancer',        component: AssignFreelancerComponent },




];
