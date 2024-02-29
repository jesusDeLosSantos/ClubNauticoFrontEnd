import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salida } from '../modelos/salida.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioSalidasService {

  private URL = 'http://localhost:8090/v0';
  salidas!:Salida[];

  constructor(private httpClient:HttpClient) { }

  getSalidas():Observable<Salida[]>{
    return this.httpClient.get<Salida[]>(`${this.URL}/salidas`);
  }

  getSalida(id:number){
    return this.httpClient.get(`${this.URL}/salidas/`+id);
  }

  updateSalida(salida:Salida){
    return this.httpClient.put(`${this.URL}/salidas/`+salida.id, salida);
  }

  createSalida(salida:Salida){
    return this.httpClient.put(`${this.URL}/salidas`, salida);
  }

  deleteSalida(id:number){
    return this.httpClient.put(`${this.URL}/salidas/`+id, id);
  }
}