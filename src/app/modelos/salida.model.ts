import { Time } from "@angular/common";
import { Persona } from "./persona.model";
import { Barco } from "./barco.model";

export class Salida{
    id!:number;
    fecha!:string;
    hora!:string;
    destino!:string;
    patron!:Persona;
    barco!:Barco;

    constructor(fecha:string, hora:string, destino:string/*, patron:Persona, barco:Barco*/){
        this.fecha=fecha;
        this.hora=hora;
        this.destino=destino;
        /*this.patron=patron;
        this.barco=barco;*/
    }
}