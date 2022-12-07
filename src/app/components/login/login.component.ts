import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  mode: ProgressSpinnerMode = 'indeterminate';
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario === 'danielTamayo' && password === 'admin123') {
      // Redireccionar al dashboard
      localStorage.setItem("logged", "true")
      this.simulLoading();
    } else {
      // Mostrar mensaje de error
      localStorage.setItem("logged", "false")
      this.openSnackBar();
      this.form.reset();
    }
  }

  openSnackBar() {
    this._snackBar.open('Usuario o contraseña ingresados son inválidos', '', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    });
  }

  simulLoading(){
    this.loading = true;
    setTimeout(() => {
      this.router.navigate(['dashboard'])
    }, 2000);
  }

}
