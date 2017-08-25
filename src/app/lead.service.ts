import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './user';
import { Lead } from './lead';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LeadService {
  private base = 'http://localhost:3000/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    this.headers.delete('x-access-token');
     // for demo purposes only
    return Promise.reject(error.message || error);
  }

  login(user: User): Promise<any> {
    return this.http
      .post(this.base + 'teacher/login', user, {headers: this.headers})
      .toPromise()
      .then(res =>res.json())
      .catch(this.handleError);
  }
  postLead(lead: Lead): Promise<any>{
    return this.http
      .post(this.base + 'leads', lead, {headers: this.headers})
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }
  getLeads(): Promise<[Lead]>{
     return this.http
      .get(this.base + 'leads', {headers: this.headers})
      .toPromise()
      .then(res =>res.json())
      .catch(this.handleError);
  }

}
