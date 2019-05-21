import { Component, OnInit } from '@angular/core';
import {Employee} from "src/app/models/employee.model";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: "test1",
      gender: "Female",
      email: "test1.k@gmailcom",
      phoneNumber: 9898779889,
      contactPreference: "Email",
      dateOfBirth: new Date("09/19/1981"),
      department: "EC",
      isActive: true,
      photoPath: "assets/images/hp.png"
    },
    {
      id: 2,
      name: "test2",
      gender: "Male",
      email: "test2@gmail.com",
      phoneNumber: 89888988999,
      contactPreference: "Email",
      dateOfBirth: new Date("07/22/1978"),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/sanu.png"
    },
    {
      id: 1,
      name: "Anika ",
      gender: "Female",
      email: "geetpriya1.k@gmailcom",
      phoneNumber: 9207060517,
      contactPreference: "Email",
      dateOfBirth: new Date("09/19/2019"),
      department: "EC",
      isActive: true,
      photoPath: "assets/images/hp.png"
    }]
  constructor() { }

  ngOnInit() {
  }

}
