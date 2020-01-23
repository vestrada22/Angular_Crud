import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employees = res;
      },
      err => console.log(err)
    )
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
    .subscribe(res => this.getEmployees(),
      err => console.log(err))
  }


}
