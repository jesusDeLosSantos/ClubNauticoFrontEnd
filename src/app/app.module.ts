import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaBarcosComponent } from './gestion-barcos/lista-barcos/lista-barcos.component';
import { BarcoComponent } from './gestion-barcos/barco/barco.component';
import { ListaSalidasComponent } from './gestion-salidas/lista-salidas/lista-salidas.component';
import { SalidaComponent } from './gestion-salidas/salida/salida.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ListaPersonasComponent } from './gestion-personas/lista-personas/lista-personas.component';
import { PersonaComponent } from './gestion-personas/persona/persona.component';
import { NuevaPersonaComponent } from './gestion-personas/nueva-persona/nueva-persona.component';
import { NuevaSalidaComponent } from './gestion-salidas/nueva-salida/nueva-salida.component';
import { NuevoBarcoComponent } from './gestion-barcos/nuevo-barco/nuevo-barco.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListaBarcosComponent,
    BarcoComponent,
    ListaSalidasComponent,
    SalidaComponent,
    PersonaComponent,
    ListaPersonasComponent,
    SingupComponent,
    NuevaPersonaComponent,
    NuevaSalidaComponent,
    NuevoBarcoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
