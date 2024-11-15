import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfoPagina } from '../interface/IInfoPage';

@Injectable({
  providedIn: 'root'
})

export class InformacionService {

  info:IInfoPagina = {};
  cargada:boolean = false;

  equipo:any[] = [];

  cargadaSobreNosotrosCheck = false;

  constructor( private http:HttpClient ) {
    this.getInfo();
    this.getTeam();
  }

  public getInfo(){
    //3) Obtengo la data y luego me suscribo
    this.http.get("assets/data/info.pagina.json").subscribe({
      next: (data: IInfoPagina) => {
        this.cargada = true;
        this.info = data;
      },
      error: (error) => {
        console.error("Error al cargar la info", error);
      }
    });
  }

  public getTeam(){
    this.http.get<any>("https://agular4-to-angular16-products-default-rtdb.firebaseio.com/equipo.json")
    .subscribe( (data: any[]) =>{
      this.equipo = data;
    });
  }

}
