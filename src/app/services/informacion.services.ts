import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros = false;
  equipo:any[] = [];

  constructor( public http:Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
  }

  public carga_info(){
    //3) Obtengo la data y luego me suscribo
    this.http.get("assets/data/info.pagina.json")
              .subscribe(data => {
                //Si solo quiero imprimir los datos json
                //console.log(data.json());
                this.cargada = true;
                this.info = data.json();
              });
  }

  public carga_sobre_nosotros(){
    this.http.get("https://prueba-30666.firebaseio.com/equipo.json")
              .subscribe(data => {
                //Si solo quiero imprimir los datos json
                //console.log(data.json());
                this.cargada_sobre_nosotros = true;
                this.equipo = data.json();
              });
  }

}
