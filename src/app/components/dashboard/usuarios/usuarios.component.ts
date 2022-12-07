import { AfterViewInit, Component, ViewChild, OnInit, AfterContentInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/interfaces/user';

import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements   AfterViewInit {

  listUsuarios: User[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<User>;



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar){
    this.cargarUsuarios();
  }

  ngAfterViewInit() {

    this._usuarioService
    .obtener(20)
    .subscribe((res) => {

      this.listUsuarios = res.results
      this.dataSource = new MatTableDataSource(this.listUsuarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });

  }

  cargarUsuarios(){
    this._usuarioService
    .obtener(20)
    .subscribe((res) => {

      this.listUsuarios = res.results
      this.dataSource = new MatTableDataSource(this.listUsuarios);

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number){
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._snackBar.open('Usuario eliminado correctamente', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    });
  }
}
