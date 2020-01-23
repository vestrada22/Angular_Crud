import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { EmployeesListComponent } from './components/employees-list/employees-list.component'
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';


const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employee/:id', component: EmployeeFormComponent },
  { path: 'employee/create', component: EmployeeFormComponent },
  { path: 'employee/edit/:id', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
