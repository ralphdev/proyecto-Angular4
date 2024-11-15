import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  constructor(
    private route: ActivatedRoute,
    public productoService: ProductosService
  ) {

    this.route.params.subscribe( params => {

      console.log(params['termino']);
      this.productoService.searchProduct( params['termino']);
    })
  }

}
