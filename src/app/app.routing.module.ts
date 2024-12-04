import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductosComponent } from './pages/item/productos.component';
import { BuscarComponent } from './pages/search/buscar.component';
import { ObservableOneComponent } from './components/observable-one/observable-one.component';
import { ObservableApiRestComponent } from './components/observable-api-rest/observable-api-rest.component';
import { MainPageComponent } from './dbz/pages/main-page.component';

const appRoute: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: ProductosComponent },
  { path: 'search/:termino', component: BuscarComponent },

  { path: 'observable-one', component: ObservableOneComponent },
  { path: 'observable-api', component: ObservableApiRestComponent },
  { path: 'dbz', component: MainPageComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoute, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
