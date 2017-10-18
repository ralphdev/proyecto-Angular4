import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  ProductosComponent,
  BuscarComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'productos/:id', component: ProductosComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash:true});
