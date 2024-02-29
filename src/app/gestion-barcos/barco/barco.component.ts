import { Component } from '@angular/core';
import { ServicioBarcosService } from '../servicio-barcos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css']
})
export class BarcoComponent {

  barco!:any;
  id!:number;

  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.rellenarBarco(this.id);
  }

  constructor(private servicioBarco:ServicioBarcosService, private route:ActivatedRoute, private router:Router){
  }

  rellenarBarco(id:number){ 
    this.servicioBarco.getBarco(this.id).subscribe(
      (data) => {
        this.barco = data;
      }
    );
  }

  guardarBarco(){
      this.servicioBarco.updateBarco(this.barco);
      this.router.navigate(["/barcos"]);
   }
}
