import { Injectable } from '@angular/core';
// http library to make calls to the server api
import { HttpClient, HttpHeaders } from '@angular/common/http'
// environment file to look up domain.  different in dev and prod
import { environment } from 'src/environments/environment';

// set up json headers for POST and PUT calls
let headers = new HttpHeaders()
headers.append('Content-Type', 'application/json')

@Injectable({
  providedIn: 'root'
})

export class EmployerService {
  // read api server domain from environment file.  used in all api calls
  serverUrl: string = environment.serverUrl

  constructor(private http: HttpClient) { }

  // GET: fetch all employers from /api/employers
  getEmployers() {
    return this.http.get(`${this.serverUrl}/api/employers`)
  }

  // POST: send to new employer to server api to be saved to db
  addEmployer(employer: any) {
    return this.http.post(`${this.serverUrl}/api/employers`, employer, {headers:headers})
  }

}
