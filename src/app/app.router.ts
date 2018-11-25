import { Routes} from '@angular/router';
import { IndexRoutes } from './index/index.router';
import { NopageRoutes } from './no-page/no-page.router';
import { HomeRoutes } from './home/home.router';

 export const routes: Routes = [...HomeRoutes,...IndexRoutes,...NopageRoutes];
