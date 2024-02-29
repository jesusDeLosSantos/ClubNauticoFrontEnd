export class UsuarioSignUp{
    nombre!:string;
    apellidos!:string;
    username!:string;
    correo!:string;
    password!:string;

    constructor(nombre:string, apellidos:string, username:string, correo:string, password:string){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.username=username;
        this.correo=correo;
        this.password=password;
    }
}