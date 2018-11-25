import { Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { NewEmployeesComponent } from './employee/new-employees/new-employees.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from '../guards/auth.guard';

export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,
    canActivate : [AuthGuard],
    children:[
     {path:'list' , component : ListEmployeesComponent},
     {path:'create', component : NewEmployeesComponent},
     {path:'contact', component : ContactComponent}
     ]
    },
  ];