import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
