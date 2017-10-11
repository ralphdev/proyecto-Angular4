import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importar Http ya que angular cli no lo hace por nosotros
import { HttpModule } from "@angular/http";

//Rutas - Añadirlo despues en los inputs o imports
import {app_routing} from "./app.routes";

//Servicios
import { InformacionService } from "./services/informacion.services";
import { ProductosService } from "./services/productos.service";


//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
