import { Injectable } from '@angular/core';
/*
Para consumir el archivo json debo seguir los siguientes pasos
*/

//1)
import { Http } from "@angular/http";
//2) Hacemos la inyeccion en el constructor

@Injectable()
export class InformacionService {

  //4) Añadir una propiedad que contenga todo el json
  info:any = {};
  //5)otra variable, por que cuando se inicializa el servicion todavia no se ha cargado
  cargada:boolean = false;

  constructor( public http:Http ) {
    //3) Obtengo la data y luego me suscribo
    this.http.get("assets/data/info.pagina.json")
              .subscribe(data => {
                //Si solo quiero imprimir los datos json
                console.log(data.json());
                this.cargada = true;
                this.info = data.json();
              })
  }

}
