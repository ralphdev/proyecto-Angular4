import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  ProductosComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
