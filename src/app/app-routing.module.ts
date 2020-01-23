import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { EmployeesListComponent } from './components/employees-list/employees-list.component'


const routes: Routes = [{
  path: '',
  component: EmployeesListComponent,

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
