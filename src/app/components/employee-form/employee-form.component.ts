import { Component, OnInit } from '@angular/core';
import { Employee } from './../../interfaces/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: '',
    age: '',
    data:[]
  };

  edit: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params
    if(params) {
      this.employeeService.getEmployee(params.id).subscribe(
        res => {
          this.employee = res;
          this.edit = true;
        },
        err => err.json()
      )
    }
  }

  submitEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      res => this.router.navigate(['/']),
      err => console.log(err)
    );
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(
      res => this.router.navigate(['/']),
      err => console.log(err)
    );
  }

  onlyNumbers(e: any) {
    // tslint:disable-next-line: deprecation
    const key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57)
      e.preventDefault();
  }

}
