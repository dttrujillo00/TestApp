import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: User[] = [];

  url = "https://randomuser.me/api/";

  constructor(private http: HttpClient) { }

  obtener(count: number): Observable<any> {
    return this.http.get(`${this.url}?results=${count}`);
  }

  // getUsuarios(){
  //   return this.listUsuarios.slice();
  // }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1)
  }

  agregarUsuario(user: Usuario){
    // this.listUsuarios.unshift(user);
  }
}
