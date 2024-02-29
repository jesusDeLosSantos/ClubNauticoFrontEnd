import { Component } from '@angular/core';
import { Barco } from 'src/app/modelos/barco.model';
import { ServicioBarcosService } from '../servicio-barcos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-barco',
  templateUrl: './nuevo-barco.component.html',
  styleUrls: ['./nuevo-barco.component.css']
})
export class NuevoBarcoComponent {

  barco!:Barco;
  nombreForm!:string;
  matriculaForm!:string;
  atraqueForm!:number;
  cuotaForm!:number;
  duenoForm!:string;

  constructor(private servicioBarco:ServicioBarcosService, private route:ActivatedRoute, private router:Router){
  }

  guardarBarco(){
    alert(this.nombreForm);

    this.barco = new Barco(this.nombreForm, this.matriculaForm, this.atraqueForm, this.cuotaForm/*, this.duenoForm*/);
    this.servicioBarco.createBarco(this.barco);
    this.router.navigate(["/barcos"]);
 }

}
