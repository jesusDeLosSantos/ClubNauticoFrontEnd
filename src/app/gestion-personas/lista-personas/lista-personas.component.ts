import { Component } from '@angular/core';
import { ServicioPersonaService } from '../servicio-persona.service';
import { Persona } from 'src/app/modelos/persona.model';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent {

  personas!:Persona[];
  persona!:Persona;

  constructor(private servicioPersona:ServicioPersonaService){  }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this.servicioPersona.getPersonas().subscribe( personas => {
        this.personas=personas;
      }
     ) 
  }

  deletePersona(id:number){
    alert(id)
    this.servicioPersona.deletePersona(id);
  }
}
