import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu[] = [];

  constructor(private _menuService: MenuService, private router: Router){

  }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe( data => {
      console.log(data);
      this.menu = data;
    })
  }

  logout(){
    localStorage.setItem("logged", "false")
    this.router.navigate(['login'])
  }
}
