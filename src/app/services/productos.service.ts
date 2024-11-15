import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProd } from '../interface/IProd';
import { IProdDesc } from '../interface/IProdDesc';
import { resolve } from '../../../node_modules/@types/q';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiUrl: string = 'https://agular4-to-angular16-products-default-rtdb.firebaseio.com';

  cargando: boolean = true;
  products: IProd[] = [];
  productsFilter: IProd[] = []

  constructor( private http: HttpClient ) {
    this.getProducts();
  }

  getProducts() {

    this.cargando = true;

    return new Promise( (resolve, reject) => {

      this.http.get<IProd[]>(`${this.apiUrl}/productos_idx.json`)
      .subscribe( (res: IProd[]) => {
        this.cargando = false;
        this.products = res;

      });
    });
  }

  getProduct( id:string ){
    return this.http.get<IProdDesc>(`${this.apiUrl}/productos/${ id }.json`)
  }

  searchProduct( termino: string) {

    if( this.products.length === 0){

      this.getProducts().then( () => {
        this.filterProducts( termino );
      })
    }
    else {
      this.filterProducts( termino );
    }
  }

  filterProducts( termino:string){

    this.productsFilter = [];

    termino = termino.toLocaleLowerCase();

    this.products.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0){
        this.productsFilter.push(prod);
      }
    })
  }

}
