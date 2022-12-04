import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
    {usuario: "dtamayo", nombre: 'Daniel', apellido: "Tamayo", sexo: 'Masculino'},
    {usuario: "sdeoro", nombre: 'Susy', apellido: "de Oro", sexo: 'Femenino'},
    {usuario: "bpineda", nombre: 'Barbara', apellido: "Pineda", sexo: 'Femenino'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez", sexo: 'Masculino'},
    {usuario: "dtamayo", nombre: 'Daniel', apellido: "Tamayo", sexo: 'Masculino'},
    {usuario: "sdeoro", nombre: 'Susy', apellido: "de Oro", sexo: 'Femenino'},
    {usuario: "bpineda", nombre: 'Barbara', apellido: "Pineda", sexo: 'Femenino'}
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1)
  }
}
