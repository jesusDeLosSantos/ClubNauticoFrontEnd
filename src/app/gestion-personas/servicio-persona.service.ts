import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {

  private URL = 'http://localhost:8090/v0';
  personas!:Persona[];

  constructor(private httpClient:HttpClient) { }

  getPersonas():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.URL}/personas`);
  }

  getPersona(id:number){
    return this.httpClient.get(`${this.URL}/personas/`+id);
  }

  updatePersona(persona:Persona){
    return this.httpClient.put(`${this.URL}/personas/`+persona.id, persona);
  }

  createPersona(persona:Persona){
    return this.httpClient.put(`${this.URL}/personas`, persona);
  }

  deletePersona(id:number){
    return this.httpClient.put(`${this.URL}/personas/`+id, id);
  }
}
