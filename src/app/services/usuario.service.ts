import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

  url = "https://randomuser.me/api/";

  constructor(private http: HttpClient) { }

  obtener(count: number): Observable<any> {
    return this.http.get(`${this.url}?results=${count}`);
  }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1)
  }

  agregarUsuario(user: Usuario){
    this.listUsuarios.unshift(user);
  }
}
