import { Persona } from "./persona.model";

export class Barco{
    id!:number;
    nombre!:string;
    matricula!:string;
    atraque!:number;
    cuota!:number;
    dueno!:Persona;

    constructor(nombre:string, matricula:string, atraque:number, cuota:number, /*dueno:Persona*/){
        this.nombre=nombre;
        this.matricula=matricula;
        this.atraque=atraque;
        this.cuota=cuota;
        //this.dueno=dueno;
    }
}