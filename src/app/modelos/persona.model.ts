export class Persona{
    id!:number;
    dni!:string;
    nombre!:string;
    apellidos!:string;
    correo!:string;
    telefono!:string;
    socio!:boolean;
    patron!: boolean;

    constructor(dni:string, nombre:string, apellidos:string, correo:string, telefono:string, socio:boolean, patron:boolean){
        this.dni=dni;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.correo=correo;
        this.telefono=telefono;
        this.socio=socio;
        this.patron=patron;
    }
}