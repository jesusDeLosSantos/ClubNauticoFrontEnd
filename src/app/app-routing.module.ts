import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListaBarcosComponent } from './gestion-barcos/lista-barcos/lista-barcos.component';
import { BarcoComponent } from './gestion-barcos/barco/barco.component';
import { ListaSalidasComponent } from './gestion-salidas/lista-salidas/lista-salidas.component';
import { SalidaComponent } from './gestion-salidas/salida/salida.component';
import { ListaPersonasComponent } from './gestion-personas/lista-personas/lista-personas.component';
import { PersonaComponent } from './gestion-personas/persona/persona.component';
import { NuevaPersonaComponent } from './gestion-personas/nueva-persona/nueva-persona.component';
import { NuevoBarcoComponent } from './gestion-barcos/nuevo-barco/nuevo-barco.component';
import { NuevaSalidaComponent } from './gestion-salidas/nueva-salida/nueva-salida.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:  LoginComponent},
  { path: 'personas', component:  ListaPersonasComponent},
  { path: 'persona/:id', component:  PersonaComponent},
  { path: 'persona', component:  NuevaPersonaComponent},
  { path: 'barcos', component:  ListaBarcosComponent},
  { path: 'barco/:id', component:  BarcoComponent},
  { path: 'barco', component:  NuevoBarcoComponent},
  { path: 'salidas', component:  ListaSalidasComponent},
  { path: 'salida/:id', component:  SalidaComponent},
  { path: 'salida', component:  NuevaSalidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
