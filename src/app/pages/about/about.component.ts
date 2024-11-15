import { Component } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent {

  constructor( public infoServ: InformacionService){

  }

}
