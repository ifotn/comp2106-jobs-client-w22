import { Component, OnInit } from '@angular/core';
// service to interact w/server api
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html'
})
export class EmployerComponent implements OnInit {
  employers: any
  name: string | undefined
  location: string | undefined
  description: string | undefined
  website: string | undefined
  _id: string | undefined

  constructor(private service: EmployerService) { }

  getEmployers(): void {
    this.service.getEmployers().subscribe(response => {
      this.employers = response
    })
  }

  addEmployer(): void {
    // create new json object from form values
    let employer = {
      name: this.name,
      location: this.location,
      description: this.description,
      website: this.website
    }

    // pass the new object to the service, which then calls POST in our server REST API
    this.service.addEmployer(employer).subscribe(response => {
      // refresh the list on the left
      this.getEmployers()

      // clear the form on the right
      this.clearForm()
    })
  }

  clearForm(): void {
    this.name = undefined
    this.location = undefined
    this.description = undefined
    this.website = undefined
    this._id = undefined
  }

  selectEmployer(name: string, location: string, description: string, website: string, _id: string): void {
    this.name = name
    this.location = location
    this.description = description
    this.website = website
    this._id = _id
  }

  deleteEmployer(_id: string) {
    if (confirm('Are you sure?')) {
      this.service.deleteEmployer(_id).subscribe(response => {
        this.getEmployers()
        this.clearForm()
      })
    }
  }

  updateEmployer(): void {
    // populate an employer json object from our form values
    let employer = {
      _id: this._id,
      name: this.name,
      location: this.location,
      description: this.description,
      website: this.website
    }

    // call update method on service and pass employer object to it
    this.service.updateEmployer(employer).subscribe(response => {
      this.getEmployers()
      this.clearForm()
    })
  }

  ngOnInit(): void {
    this.getEmployers()
  }

}
