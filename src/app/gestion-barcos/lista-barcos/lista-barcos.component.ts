import { Component } from '@angular/core';
import { ServicioBarcosService } from '../servicio-barcos.service';
import { Barco } from 'src/app/modelos/barco.model';

@Component({
  selector: 'app-lista-barcos',
  templateUrl: './lista-barcos.component.html',
  styleUrls: ['./lista-barcos.component.css']
})
export class ListaBarcosComponent {

  barcos!:Barco[];
  barco!:Barco;

  constructor(private servicioBarco:ServicioBarcosService){  }

  ngOnInit(): void {
    this.getBarcos();
  }

  getBarcos(){
    this.servicioBarco.getBarcos().subscribe( barcos => {
        this.barcos=barcos;
      }
     ) 
  }

  deleteBarco(id:number){
    alert(id)
    this.servicioBarco.deleteBarco(id);
  }
}
