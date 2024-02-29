import { Injectable } from '@angular/core';
import { Barco } from '../modelos/barco.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ServicioBarcosService {

  barcos!:Barco[];

  constructor(private httpClient:HttpClient) { }

  getBarcos():Observable<Barco[]>{
    return this.httpClient.get<Barco[]>(`${baserUrl}/barcos`);
  }

  getBarco(id:number){
    return this.httpClient.get(`${baserUrl}/barcos/`+id);
  }

  updateBarco(barco:Barco){
    return this.httpClient.put(`${baserUrl}/barcos/`+barco.id, barco);
  }

  createBarco(barco:Barco){
    return this.httpClient.post(`${baserUrl}/barcos`, barco);
  }

  deleteBarco(id:number){
    return this.httpClient.delete(`${baserUrl}/barcos/`+id);
  }
}
