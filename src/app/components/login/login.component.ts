import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  mode: ProgressSpinnerMode = 'indeterminate';
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario === 'jperez' && password === 'admin123') {
      // Redireccionar al dashboard
      this.simulLoading();
    } else {
      // Mostrar mensaje de error
      this.openSnackBar();
      this.form.reset();
    }
  }

  openSnackBar() {
    this._snackBar.open('Usuario o contraseña ingresados son inválidos', '', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  simulLoading(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
