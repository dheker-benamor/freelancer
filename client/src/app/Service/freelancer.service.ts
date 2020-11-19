import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FreelancerService {
    httpOptions =
        {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),

        };
    private url = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getFreelancers(): Observable<any> {
        return this.http.get(this.url + '/freelancer');

    }

    getFreelancerById(freelancerId): Observable<any> {
        return this.http.get(this.url + '/freelancer/' + freelancerId);

    }
    createFreelancer(freelancer) : Observable<any> {
        return this.http.post(this.url+'/freelancer',freelancer,this.httpOptions);

    }
}
