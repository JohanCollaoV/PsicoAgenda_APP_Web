import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-atencionespsicologo',
  templateUrl: './atencionespsicologo.page.html',
  styleUrls: ['./atencionespsicologo.page.scss'],
})
export class AtencionespsicologoPage implements OnInit {
  atencionesCitas: any[] = [];
  showAtencionesCitasEmptyMessage: boolean = false;
  loading: boolean = false;
  isAlertOpen = false;
  alertButtons = ['OK'];
  error_mensaje: any = '';
  login: boolean = false;
  idPsicologo: number = 0;
  idTipo: number = 0;
  idUsuario: number = 0;
  idPersona: number = 0;
  idPaciente: string = '';
  correo: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    }, 1500);
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
      this.obtenerAtencionesPsicologo();
    }
  }

  verFicha(index:number) {
    const elemento2 = document.getElementById('id_paciente_' + index);
    const idPacienteString = elemento2 ? elemento2.textContent : null;
    const idPaciente = parseInt(idPacienteString!, 10);
    this.idPaciente = idPaciente.toString();
    let parametros: NavigationExtras = {
      state: {
        idPaciente: this.idPaciente,
        login: this.login,
        idPsicologo: this.idPsicologo,
        idUsuario: this.idUsuario,
        correo: this.correo,
        idTipo: this.idTipo,
        idPersona: this.idPersona
      }
    };
    console.log("idPaciente: " + this.idPaciente)
    this.router.navigate(['fichapsicologo'], parametros);
  }

  async obtenerAtencionesPsicologo() {
    const IdPsicologo = this.idPsicologo; // Reemplaza esto con el IdPsicologo real
    try {
      const data = this.apiService.obtenerAtencionesPsicologo(IdPsicologo);
      const respuesta = await lastValueFrom(data) as any[];
      this.atencionesCitas = respuesta;
      this.showAtencionesCitasEmptyMessage = !this.atencionesCitas || this.atencionesCitas.length === 0;
    } catch (error) {
      this.showAtencionesCitasEmptyMessage = true;
      this.isAlertOpen = true;
      this.error_mensaje = 'Error al obtener las atenciones';
      console.error('Error al obtener las atenciones', error);
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
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
}
