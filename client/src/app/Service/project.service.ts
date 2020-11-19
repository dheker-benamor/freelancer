import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    httpOptions =
        {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

        };
    private url ='http://localhost:3000';
    constructor(private http: HttpClient) { }
    getProjects() : Observable<any> {
        return this.http.get(this.url+'/project');

    }
    getProjectById(projectId) : Observable<any> {
        return this.http.get(this.url+'/project/'+projectId);

    }
    deleteProject(projectId) : Observable<any> {
        return this.http.delete(this.url+'/project/'+projectId);

    }
    createProject(project) : Observable<any> {
        return this.http.post(this.url+'/project',project,this.httpOptions);

    }
    updateProject(project) : Observable<any> {
        return this.http.put(this.url+'/project/'+project.id,project,this.httpOptions);

    }
    assignFreelancer(projectId,freelancerId) : Observable<any> {
        return this.http.put(this.url+'/project/assignFreelancer/'+projectId+'/'+freelancerId,{});

    }
    errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
