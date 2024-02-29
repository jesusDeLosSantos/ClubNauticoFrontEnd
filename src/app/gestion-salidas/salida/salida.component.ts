import { Component } from '@angular/core';
import { ServicioSalidasService } from '../servicio-salidas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent {

  salida!:any;
  id!:number;

  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.rellenarSalida(this.id);
  }

  constructor(private servicioSalida:ServicioSalidasService, private route:ActivatedRoute, private router:Router){
  }

  rellenarSalida(id:number){ 
    this.servicioSalida.getSalida(this.id).subscribe(
      (data) => {
        this.salida = data;
      }
    );
  }

  guardarSalida(){
      this.servicioSalida.updateSalida(this.salida);
      this.router.navigate(["/salidas"]);
   }
}
