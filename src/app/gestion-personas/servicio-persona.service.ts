import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona.model';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {

  personas!:Persona[];

  constructor(private httpClient:HttpClient) { }

  getPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${baserUrl}/personas`);
  }

  getPersona(id:number){
    return this.httpClient.get(`${baserUrl}/personas/`+id);
  }

  updatePersona(persona:Persona){
    return this.httpClient.put(`${baserUrl}/personas/`+persona.id, persona);
  }

  createPersona(persona:Persona){
    return this.httpClient.post(`${baserUrl}/personas`, persona);
  }

  deletePersona(id:number){
    return this.httpClient.delete(`${baserUrl}/personas/`+id);
  }
}
