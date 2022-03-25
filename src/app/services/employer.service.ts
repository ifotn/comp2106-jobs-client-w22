import { Injectable } from '@angular/core';
// http library to make calls to the server api
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) { }

  // GET: fetch all employers from /api/employers
  getEmployers() {
    return this.http.get('http://localhost:3000/api/employers')
  }

}
