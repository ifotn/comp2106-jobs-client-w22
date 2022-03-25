import { Component, OnInit } from '@angular/core';
// service to interact w/server api
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html'
})
export class EmployerComponent implements OnInit {
  employers: any

  constructor(private service: EmployerService) { }

  getEmployers(): void {
    this.service.getEmployers().subscribe(response => {
      this.employers = response
    })
  }

  ngOnInit(): void {
    this.getEmployers()
  }

}
