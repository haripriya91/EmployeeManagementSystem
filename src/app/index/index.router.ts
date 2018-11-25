import { Routes} from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const IndexRoutes: Routes = [
    {path:'',component:IndexComponent,
     children:[
      {path:'login' , component : LoginComponent},
      {path:'signup', component : SignupComponent}
      ]
    }
  ];