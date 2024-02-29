import { Component } from '@angular/core';
import { ServicioPersonaService } from '../servicio-persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona.model';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent {

  persona!:Persona;
  dniForm!:string;
  nombreForm!:string;
  apellidosForm!:string;
  correoForm!:string;
  telefonoForm!:string;
  socioForm!:boolean;
  patronForm!:boolean;

  constructor(private servicioPersona:ServicioPersonaService, private route:ActivatedRoute, private router:Router){
  }

  guardarPersona(){
    alert(this.dniForm);
    this.persona = new Persona(this.dniForm, this.nombreForm, this.apellidosForm, this.correoForm, this.telefonoForm, this.socioForm, this.patronForm);
    this.servicioPersona.createPersona(this.persona);
    this.router.navigate(["/personas"]);
 }

}
