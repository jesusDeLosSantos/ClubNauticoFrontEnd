import { Component } from '@angular/core';
import { ServicioPersonaService } from '../servicio-persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  persona!:any;
  id!:number;

  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.rellenarPersona(this.id);
  }

  constructor(private servicioPersona:ServicioPersonaService, private route:ActivatedRoute, private router:Router){
  }

  rellenarPersona(id:number){ 
    this.servicioPersona.getPersona(this.id).subscribe(
      (data) => {
        this.persona = data;
      }
    );
  }

  guardarPersona(){
      this.servicioPersona.updatePersona(this.persona);
      this.router.navigate(["/personas"]);
   }
}
