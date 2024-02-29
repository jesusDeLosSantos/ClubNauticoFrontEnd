import { Injectable } from '@angular/core';
import { Barco } from '../modelos/barco.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioBarcosService {

  private URL = 'http://localhost:8090/v0';
  barcos!:Barco[];

  constructor(private httpClient:HttpClient) { }

  getBarcos():Observable<Barco[]>{
    return this.httpClient.get<Barco[]>(`${this.URL}/barcos`);
  }

  getBarco(id:number){
    return this.httpClient.get(`${this.URL}/barcos/`+id);
  }

  updateBarco(barco:Barco){
    return this.httpClient.put(`${this.URL}/barcos/`+barco.id, barco);
  }

  createBarco(barco:Barco){
    return this.httpClient.put(`${this.URL}/barcos`, barco);
  }

  deleteBarco(id:number){
    return this.httpClient.put(`${this.URL}/barcos/`+id, id);
  }
}
