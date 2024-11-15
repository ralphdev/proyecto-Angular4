import { Component } from '@angular/core';
import { InformacionService } from "../../services/informacion.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(
    public infoServ: InformacionService,
    public router: Router
  ){

  }

    searchProduct( termino:string ){

      console.log(termino)

      if( termino.length < 1){
        return
      }

      this.router.navigate(['/search', termino]);

    }
}
