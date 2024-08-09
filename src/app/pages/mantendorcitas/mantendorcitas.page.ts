import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mantendorcitas',
  templateUrl: './mantendorcitas.page.html',
  styleUrls: ['./mantendorcitas.page.scss'],
})
export class MantendorcitasPage implements OnInit {

  login: boolean = false;
  criterio: number = 2;
  mdl_dato: string = '';
  lista_respuesta: any[] = [];
  lista_psicologos: any[] = [];
  lista_final: any[] = [];
  botonAccion: boolean = false;
  tablaBusqueda: boolean = false;
  idPaciente: number = 1;
  idCita: number = 0;
  mdl_estado: string = '';
  estado: number = 0;
  isAlertOpen = false;
  isAlertOpen2 = false;
  isAlertOpen3 = false;
  isAlertOpen4 = false;
  isAlertOpen5 = false;
  isAlertOpen6 = false;
  alertButtons = ['OK'];
  isModalOpen = false;
  inputBuscador = false;
  mdl_inicio: string = '';
  mdl_fin: string = '';

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.login = parametros?.extras.state['login'];
    }
    if (!this.login) {
      this.router.navigate(['home']);
    } else {
      console.log("Usuario Autenticado")
      console.log('Criterio: ' + this.criterio);
      this.busqueda();
    }
  }

  insertarCitas() {
    this.isAlertOpen6 = false;
    console.log(this.mdl_inicio);
    console.log(this.mdl_fin);
    if (this.mdl_inicio != '' || this.mdl_fin != '') {
      this.apiService.insertarCitas(this.mdl_inicio, this.mdl_fin).subscribe(
        response => {
          console.log('Citas insertardas correctamente', response);
          this.isAlertOpen = true;
        },
        error => {
          console.error('Error al insertar las citas', error);
          this.isAlertOpen2 = true;
        }
      );
    } else {
      this.isAlertOpen6 = true;
    }
    
  }

  async busqueda() {
    let data = this.apiService.listaPsicologos();
    let respuesta = await lastValueFrom(data);
    let jsonTexto = JSON.stringify(respuesta);
    let json = JSON.parse(jsonTexto);
    for (let x = 0; x < json.length; x++) {
      this.lista_psicologos.push(json[x]);
      this.lista_psicologos.sort((a, b) => a.Nombre.localeCompare(b.Nombre));
    }
    console.log(this.lista_psicologos)
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

  setOpenModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
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
    };
    this.router.navigate(['home'], parametros);
  }

  actualizarCriterioRut() {
    this.criterio = 2;
    console.log('Criterio: ' + this.criterio);
  }

  actualizarCriterioId() {
    this.criterio = 1;
    console.log('Criterio: ' + this.criterio);
  }

  async busquedaCita() {
    this.lista_respuesta = [];
    this.isAlertOpen3 = false;
    if (this.mdl_dato != '') {
      let data = this.apiService.adminCita(this.criterio, this.mdl_dato);
      let respuesta = await lastValueFrom(data);
      let jsonTexto = JSON.stringify(respuesta);
      let json = JSON.parse(jsonTexto);
      for (let x = 0; x < json.length; x++) {
        this.tablaBusqueda = true;
        json[x].isEditing = false; // Añadir propiedad isEditing
        this.lista_respuesta.push(json[x]);
      }
    } else {
      this.isAlertOpen3 = true;
    }
  }

  actualizarEstado(cita: any) {
    this.mdl_estado = cita.DescripcionEstado;
    cita.isEditing = true;
  }

  cancelar(cita: any) {
    cita.isEditing = false;
  }

  updateCita(idCita: any, idPaciente: any) {
    this.isAlertOpen = false;
    this.isAlertOpen2 = false;
    console.log('Estado Cita: ', this.mdl_estado);
    if (this.mdl_estado == 'Asignado') {
      this.estado = 1;
    } else if (this.mdl_estado == 'Concluido') {
      this.estado = 2;
    } else if (this.mdl_estado == 'Pendiente') {
      this.estado = 3;
    }
    console.log('Estado: ', this.estado);
    this.apiService.confirmarCita(idPaciente, this.estado, idCita).subscribe(
      response => {
        console.log('Cita Agendada Correctamente', response);
        this.isAlertOpen = true;
      },
      error => {
        console.error('Error al agendar la cita', error);
        this.isAlertOpen2 = true;
      }
    );
  }

  eliminarCita (idCita: number) {
    this.isAlertOpen4 = false;
    this.isAlertOpen5 = false;
    this.apiService.borrarCita(idCita).subscribe(
      response => {
        console.log('Cita Eliminada Correctamente', response);
        this.isAlertOpen4 = true;
      },
      error => {
        console.error('Error al eliminar la cita', error);
        this.isAlertOpen5 = true;
      }
    );
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isAlertOpen2 = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isAlertOpen3 = isOpen;
  }

  setOpen4(isOpen: boolean) {
    this.isAlertOpen4 = isOpen;
  }

  setOpen5(isOpen: boolean) {
    this.isAlertOpen5 = isOpen;
  }

  setOpen6(isOpen: boolean) {
    this.isAlertOpen6 = isOpen;
  }

  recarga() {
    this.lista_respuesta = [];
    this.botonAccion = false;
    this.mdl_dato = '';
    this.tablaBusqueda = false;
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

  psicologoEspecifico() {
    this.inputBuscador = true;
  }

  todosLosPsicologos() {
    this.inputBuscador = false;
  }

}