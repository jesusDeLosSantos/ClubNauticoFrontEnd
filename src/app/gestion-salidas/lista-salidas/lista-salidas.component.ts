import { Component } from '@angular/core';
import { Salida } from 'src/app/modelos/salida.model';
import { ServicioSalidasService } from '../servicio-salidas.service';

@Component({
  selector: 'app-lista-salidas',
  templateUrl: './lista-salidas.component.html',
  styleUrls: ['./lista-salidas.component.css']
})
export class ListaSalidasComponent {
  salidas!:Salida[];
  salida!:Salida;

  constructor(private servicioSalida:ServicioSalidasService){  }

  ngOnInit(): void {
    this.getSalidas();
  }

  getSalidas(){
    this.servicioSalida.getSalidas().subscribe( salidas => {
        this.salidas=salidas;
      }
     ) 
  }

  deleteSalida(id:number){
    alert(id)
    this.servicioSalida.deleteSalida(id);
  }
}
