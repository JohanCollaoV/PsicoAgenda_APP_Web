import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-psicologo',
  templateUrl: './psicologo.page.html',
  styleUrls: ['./psicologo.page.scss'],
})
export class PsicologoPage implements OnInit {
  // Datos simulados para las citas
  citas = [
    { fechaHora: '01/01/2024 10:00 AM', idCita: '1234', datosPaciente: 'Juan Pérez', estado: 'Confirmada' },
    { fechaHora: '02/01/2024 11:00 AM', idCita: '1235', datosPaciente: 'Ana Gómez', estado: 'Pendiente' },
    { fechaHora: '03/01/2024 12:00 PM', idCita: '1236', datosPaciente: 'Mario Bros', estado: 'Cancelada' }
  ];

  login: boolean = false;
  idTipo: number = 0;
  idUsuario: number = 0;
  lista_respuesta: any[] = [];
  idPsicologo: number = 0;
  idPersona: number = 0;
  idPaciente: number = 0;
  correo: string = '';

  constructor(private router: Router, private apiService: ApiService) { }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  async ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.idPsicologo = parametros?.extras.state['idPsicologo'];
      this.idTipo = parametros?.extras.state['idTipoUsuario'];
      this.idUsuario = parametros?.extras.state['idUsuario'];
      this.login = parametros?.extras.state['login'];
      this.correo = parametros?.extras.state['correo'];
      this.idPersona = parametros?.extras.state['idPersona'];
      console.log('Id Usuario:' + this.idUsuario)
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
        this.idPsicologo = this.lista_respuesta[x].IdPsicologo;
        console.log('ID Psicologo: ' + this.idPsicologo);
      }
    }
  }

  goHistorial() {
    this.login = true;
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPsicologo: this.idPsicologo,
        idUsuario: this.idUsuario,
        correo: this.correo,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    }
    this.router.navigate(['historialpsicologo'], parametros);
  }

  goAtenciones() {
    this.login = true;
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPsicologo: this.idPsicologo,
        idUsuario: this.idUsuario,
        correo: this.correo,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    }
    this.router.navigate(['atencionespsicologo'], parametros);
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

  goEditar() {
    console.log('Login: ', this.login)
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPsicologo: this.idPsicologo,
        idUsuario: this.idUsuario,
        correo: this.correo,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    };
    this.router.navigate(['editarpsicologo'], parametros);
  }

  goHome() {
    if (this.login) {
      let parametros: NavigationExtras = {
        state: {
          login: this.login,
          idPsicologo: this.idPsicologo,
          idUsuario: this.idUsuario,
          correo: this.correo,
          idTipo: this.idTipo,
          idPersona: this.idPersona
        },
        replaceUrl: true
      }
      this.router.navigate(['psicologo'], parametros);
    } else {
      let parametros: NavigationExtras = {
        replaceUrl: true
      }
      this.router.navigate(['home'], parametros);
    }
  }

  goSoporte () {
    let parametros: NavigationExtras = {
      state: {
        login: this.login,
        idPsicologo: this.idPsicologo,
        idUsuario: this.idUsuario,
        correo: this.correo,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      },
      replaceUrl: true
    }
    this.router.navigate(['soportepsicologo'], parametros);
  }


}