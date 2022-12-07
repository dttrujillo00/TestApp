import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  sexo: any[] = ["Masculino", "Femenino"]
  form: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }

  agregarUsuario(){

    const user: User = {
      name: {
        first: this.form.value.nombre,
        last: this.form.value.apellido
      },
      email: this.form.value.usuario,
      gender: this.form.value.sexo,
    }
    this.router.navigateByUrl('/dashboard/usuarios')

    this._snackBar.open('El usuario fue agregado con éxito', '', {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    });

  }



}
