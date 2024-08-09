import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  constructor(private router: Router, private apiService: ApiService) { }

  login: boolean = false;
  idTipo: number = 0;
  idUsuario: number = 0;
  idPersona: number = 0;
  lista_respuesta: any[] = [];
  idPaciente: number = 0;
  correo: string = '';

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  async ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
      if (parametros?.extras.state) {
        this.idTipo = parametros?.extras.state['idTipoUsuario'];
        this.idPaciente = parametros?.extras.state['idPaciente'];
        this.idUsuario = parametros?.extras.state['idUsuario'];
        this.login = parametros?.extras.state['login'];
        this.correo = parametros?.extras.state['correo'];
        this.idPersona = parametros?.extras.state['idPersona'];
      }
    if (!this.login) {
      this.router.navigate(['home']);
    } else {
      let data = this.apiService.getId(this.idTipo, this.idUsuario);
      let respuesta = await lastValueFrom(data);
      let jsonTexto = JSON.stringify(respuesta);
      let json = JSON.parse(jsonTexto);
      for (let x = 0; x < json.length; x++) {
        this.lista_respuesta.push(json[x]);
        this.idPaciente = this.lista_respuesta[x].IdPaciente;
        console.log(this.idPaciente);
      }
    }
  }

  buscar() {
    this.login = true;
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPaciente: this.idPaciente,
        correo: this.correo,
        idUsuario: this.idUsuario,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    }
    this.router.navigate(['busqueda'], parametros);

  }

  goHistorial() {
    console.log('Login: ', this.login)
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPaciente: this.idPaciente,
        correo: this.correo,
        idUsuario: this.idUsuario,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    }
    this.router.navigate(['atencionespaciente'], parametros);
  }

  goHome() {
    if (this.login) {
      let parametros: NavigationExtras = {
        state: {
          login: this.login,
          idPaciente: this.idPaciente,
          correo: this.correo,
          idUsuario: this.idUsuario,
          idTipo: this.idTipo,
          idPersona: this.idPersona
        },
        replaceUrl: true
      }
      this.router.navigate(['cliente'], parametros);
    } else {
      let parametros: NavigationExtras = {
        replaceUrl: true
      }
      this.router.navigate(['home'], parametros);
    }
  }

  goEditar () {
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPaciente: this.idPaciente,
        correo: this.correo,
        idUsuario: this.idUsuario,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    }
    this.router.navigate(['editarpaciente'], parametros);
  }

  goSoporte () {
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPaciente: this.idPaciente,
        correo: this.correo,
        idUsuario: this.idUsuario,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    }
    this.router.navigate(['soportepaciente'], parametros);
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
}
