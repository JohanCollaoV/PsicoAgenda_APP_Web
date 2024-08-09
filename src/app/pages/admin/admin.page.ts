import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  login: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.login = parametros?.extras.state['login'];
    }
    if (!this.login) {
      this.router.navigate(['home']);
    } else {
      console.log("Usuario Autenticado")
    }
  }


  goCitas() {
    let parametros: NavigationExtras = {
      state: {
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['mantendorcitas'], parametros);
  }

  goUsuarios() {
    let parametros: NavigationExtras = {
      state: {
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['mantenedorusuarios'], parametros);
  }

  logout() {
    this.login = false;
    let parametros: NavigationExtras = {
      state: {
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['home'], parametros);
  }

  goHome() {
    console.log("Login: ", this.login)
    if (this.login) {
      let parametros: NavigationExtras = {
        state: {
          login: this.login
        },
        replaceUrl: true
      }
      this.router.navigate(['admin'], parametros);
    } else {
      let parametros: NavigationExtras = {
        replaceUrl: true
      }
      this.router.navigate(['home'], parametros);
    }
  }

}
