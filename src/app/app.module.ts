import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

//Rutas - Añadirlo despues en los inputs o imports
import { AppRoutingModule } from "./app.routing.module";

//Servicios
import { InformacionService } from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";


//Componentes
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductosComponent } from './pages/item/productos.component';
import { BuscarComponent } from './pages/search/buscar.component';
import { ObservableOneComponent } from './components/observable-one/observable-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductosComponent,
    BuscarComponent,
    ObservableOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
