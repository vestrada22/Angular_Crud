import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  BASE_URL = 'http://dummy.restapiexample.com/api/v1';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.BASE_URL}/employees`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.BASE_URL}/employee/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.BASE_URL}/create`, employee);
  }

  deleteEmployee(id: number): Observable<Employee> {
    console.log(`${this.BASE_URL}/delete/${id}`)
    return this.http.delete<Employee>(`${this.BASE_URL}/delete/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.BASE_URL}/update/${id}`, employee);
  }

}
