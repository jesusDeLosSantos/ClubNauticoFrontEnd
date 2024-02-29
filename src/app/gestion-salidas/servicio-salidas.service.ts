import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salida } from '../modelos/salida.model';
import { Observable } from 'rxjs';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ServicioSalidasService {

  salidas!:Salida[];

  constructor(private httpClient:HttpClient) { }

  getSalidas():Observable<Salida[]>{
    return this.httpClient.get<Salida[]>(`${baserUrl}/salidas`);
  }

  getSalida(id:number){
    return this.httpClient.get(`${baserUrl}/salidas/`+id);
  }

  updateSalida(salida:Salida){
    return this.httpClient.put(`${baserUrl}/salidas/`+salida.id, salida);
  }

  createSalida(salida:Salida){
    return this.httpClient.post(`${baserUrl}/salidas`, salida);
  }

  deleteSalida(id:number){
    return this.httpClient.delete(`${baserUrl}/salidas/`+id);
  }
}