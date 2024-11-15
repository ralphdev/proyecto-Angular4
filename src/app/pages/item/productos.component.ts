import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from "../../services/productos.service";
import { IProdDesc } from 'src/app/interface/IProdDesc';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: []
})
export class ProductosComponent {

  product!: IProdDesc;
  id!: string;

  constructor(
    private route:ActivatedRoute,
    public prodServ: ProductosService,
   ) {

    this.route.params.subscribe( parametros => {

      prodServ.getProduct( parametros['id'] )
         .subscribe( res => {

           this.id = parametros['id'];
           this.product = res;
         });

    });
  }
}
