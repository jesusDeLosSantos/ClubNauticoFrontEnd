import { Time } from "@angular/common";
import { Persona } from "./persona.model";
import { Barco } from "./barco.model";

export class Salida{
    id!:number;
    fechaSalida!:string;
    fechaEntrada!:string;
    destino!:string;
    patron!:Persona;
    barco!:Barco;

    constructor(fechaSalida:string, fechaEntrada:string, destino:string/*, patron:Persona, barco:Barco*/){
        this.fechaSalida=fechaSalida;
        this.fechaEntrada=fechaEntrada;
        this.destino=destino;
        /*this.patron=patron;
        this.barco=barco;*/
    }
}