import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { NewEmployeesComponent } from './employee/new-employees/new-employees.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ ListEmployeesComponent, NewEmployeesComponent, ContactComponent ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class HomeModule { }
