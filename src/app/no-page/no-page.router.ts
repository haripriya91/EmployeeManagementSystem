import { Routes,RouterModule } from '@angular/router';
import { NoPageComponent } from './no-page.component';

export const NopageRoutes: Routes = [
    {path:'**',component:NoPageComponent }
  ];