import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

    constructor( public _is:InformacionService ){}

    buscar_producto( termino:string ){
      console.log(termino);
    }
}
