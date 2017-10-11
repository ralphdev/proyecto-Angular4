import { Component } from '@angular/core';
import { InformacionService } from "./services/informacion.services";
import { ProductosService } from "./services/productos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor( public _is:InformacionService,
                 public _ps:ProductosService ){

    }
}
