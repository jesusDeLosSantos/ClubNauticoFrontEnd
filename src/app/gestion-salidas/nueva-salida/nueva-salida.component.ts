import { Component } from '@angular/core';
import { ServicioSalidasService } from '../servicio-salidas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salida } from 'src/app/modelos/salida.model';

@Component({
  selector: 'app-nueva-salida',
  templateUrl: './nueva-salida.component.html',
  styleUrls: ['./nueva-salida.component.css']
})
export class NuevaSalidaComponent {

  salida!:Salida;
  fechaForm!:string;
  horaForm!:string;
  destinoForm!:string;
  patronForm!:string;
  barcoForm!:string;

  constructor(private servicioSalida:ServicioSalidasService, private route:ActivatedRoute, private router:Router){
  }

  guardarSalida(){
    alert(this.destinoForm);
    this.salida = new Salida(this.fechaForm, this.horaForm, this.destinoForm/*, this.patronForm, this.barcoForm*/);
    this.servicioSalida.createSalida(this.salida);
    this.router.navigate(["/salidas"]);
 }

}
