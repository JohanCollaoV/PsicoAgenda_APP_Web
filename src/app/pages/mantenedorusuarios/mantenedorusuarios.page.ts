import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mantenedorusuarios',
  templateUrl: './mantenedorusuarios.page.html',
  styleUrls: ['./mantenedorusuarios.page.scss'],
})
export class MantenedorusuariosPage implements OnInit {

  login: boolean = false;
  criterio: number = 2;
  mdl_dato: string = '';
  lista_respuesta: any[] = [];
  botonAccion: boolean = false;
  tablaBusqueda: boolean = false;
  idPaciente: number = 1;
  idCita: number = 0;
  mdl_estado: string = ''
  estado: number = 0;
  isAlertOpen = false;
  isAlertOpen2 = false;
  isAlertOpen3 = false;
  alertButtons = ['OK'];
  mdl_nombre: string = '';
  mdl_nombre2: string = '';
  mdl_apellido: string = '';
  mdl_apellido2: string = '';
  idComuna: number = 0;
  idEspecialidad: number = 0;
  mdl_numeracion: number = 0;
  mdl_telefono: string = '';
  mdl_valor: number = 0;
  mdl_calle: string = '';
  mdl_comuna: string = '';
  mdl_descripcion: string = '';
  lista_especialidades: any = [];
  lista_comuna: any = [];
  lista_especialidad: any = [];
  idTipo: number = 0;
  formPaciente: boolean = false;
  formPsicologo: boolean = false;
  idUsuario: number = 0;
  idPersona: number = 0;
  idDireccion: number = 0;
  botonConfirmar: boolean = true;
  botonGuardar: boolean = false;

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
      console.log('Criterio: ' + this.criterio)
      this.especialidades();
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

  actualizarCriterioRut() {
    this.criterio = 2;
    console.log('Criterio: ' + this.criterio)
  }

  actualizarCriterioId() {
    this.criterio = 1;
    console.log('Criterio: ' + this.criterio)
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

  recarga() {
    this.lista_respuesta = [];
    this.botonAccion = false;
    this.mdl_dato = '';
    this.tablaBusqueda = false;
  }

  async especialidades() {
    let data = this.apiService.especilidades();
    let respuesta = await lastValueFrom(data);
    let jsonTexto = JSON.stringify(respuesta);
    let json = JSON.parse(jsonTexto);
    for (let x = 0; x < json.length; x++) {
      this.tablaBusqueda = true;
      this.lista_especialidades.push(json[x]);
    }
  }

  async busquedaUsuario() {
    this.isAlertOpen3 = false;
    if (this.mdl_dato != '') {
      this.lista_respuesta = [];
      let data = this.apiService.buscarUsuario(this.criterio, this.mdl_dato)
      let respuesta = await lastValueFrom(data);
      let jsonTexto = JSON.stringify(respuesta);
      let json = JSON.parse(jsonTexto);
      for (let x = 0; x < json.length; x++) {
        this.lista_respuesta.push(json[x]);
        this.idTipo = this.lista_respuesta[x].IdTipoUsuario;
        this.idUsuario = this.lista_respuesta[x].IdUsuario;
        this.idDireccion = this.lista_respuesta[x].IdDireccion;
        this.idPersona = this.lista_respuesta[x].IdPersona;
        this.mdl_calle = this.lista_respuesta[x].Calle;
        this.mdl_descripcion = this.lista_respuesta[x].Descripcion;
        this.mdl_nombre = this.lista_respuesta[x].PrimerNombre;
        this.mdl_nombre2 = this.lista_respuesta[x].SegundoNombre;
        this.mdl_apellido = this.lista_respuesta[x].ApellidoPaterno;
        this.mdl_apellido2 = this.lista_respuesta[x].ApellidoMaterno;
        this.mdl_numeracion = this.lista_respuesta[x].Numero;
        this.mdl_telefono = this.lista_respuesta[x].Telefono;
        this.mdl_valor = this.lista_respuesta[x].ValorSesion;
        this.mdl_estado = this.lista_respuesta[x].NombreEspecialidad;
        this.mdl_comuna = this.lista_respuesta[x].NombreComuna;
        console.log('Comuna: ' + this.mdl_comuna)
        console.log('Especialidad: ' + this.mdl_estado)
        if (this.idTipo == 1) {
          this.formPaciente = true;
          this.formPsicologo = false;
        } else if (this.idTipo == 2) {
          this.formPaciente = false;
          this.formPsicologo = true;
        }
      }
    } else {
      this.isAlertOpen3 = true;
    }
  }

  cancelar() {
    this.lista_respuesta = [];
    this.isAlertOpen = false;
    this.isAlertOpen2 = false;
    this.isAlertOpen3 = false;
    this.formPaciente = false;
    this.formPsicologo = false;
    this.mdl_dato = '';
    this.botonConfirmar = true;
    this.botonGuardar = false;
  }

  async parametros() {
    this.botonConfirmar = false;
    this.botonGuardar = true;
    this.lista_comuna = [];
    this.lista_especialidad = [];
    console.log('Comuna: ' + this.mdl_comuna)
    let data = this.apiService.buscarComuna(this.mdl_comuna)
    let respuesta = await lastValueFrom(data);
    let jsonTexto = JSON.stringify(respuesta);
    let json = JSON.parse(jsonTexto);
    for (let x = 0; x < json.length; x++) {
      this.lista_comuna.push(json[x]);
      this.idComuna = this.lista_comuna[x].IdComuna;
    }
    let data2 = this.apiService.buscarEspecilidad(this.mdl_estado)
    let respuesta2 = await lastValueFrom(data2);
    let jsonTexto2 = JSON.stringify(respuesta2);
    let json2 = JSON.parse(jsonTexto2);
    for (let x = 0; x < json2.length; x++) {
      this.lista_especialidad.push(json2[x]);
      this.idEspecialidad = this.lista_especialidad[x].IdEspecialidad;
      console.log('ID: ' + this.idEspecialidad)
    }
  }

  async actualizarDatos() {
    this.isAlertOpen = false;
    this.isAlertOpen = false;
    if (this.idTipo == 1 || this.idTipo == 3) {
      console.log('Datos para updatePaciente:', {
        idPersona: this.idPersona,
        idDireccion: this.idDireccion,
        mdl_calle: this.mdl_calle,
        mdl_numeracion: this.mdl_numeracion,
        idComuna: this.idComuna,
        mdl_telefono: this.mdl_telefono,
        mdl_nombre: this.mdl_nombre,
        mdl_nombre2: this.mdl_nombre2,
        mdl_apellido: this.mdl_apellido,
        mdl_apellido2: this.mdl_apellido2
      });
      this.apiService.updatePaciente(this.idPersona, this.idDireccion,
        this.mdl_calle, this.mdl_numeracion, this.idComuna, this.mdl_telefono, this.mdl_nombre, this.mdl_nombre2,
        this.mdl_apellido, this.mdl_apellido2
      ).subscribe(
        response => {
          console.log('Datos actualizados', response);
          this.isAlertOpen = true;
        },
        error => {
          console.error('Error al actualizar datos', error);
          this.isAlertOpen2 = true;
        }
      );
    } else if (this.idTipo == 2) {
      console.log('Datos para updatePsicologo:', {
        idUsuario: this.idUsuario,
        idPersona: this.idPersona,
        idDireccion: this.idDireccion,
        mdl_calle: this.mdl_calle,
        mdl_numeracion: this.mdl_numeracion,
        idComuna: this.idComuna,
        mdl_valor: this.mdl_valor,
        mdl_telefono: this.mdl_telefono,
        mdl_descripcion: this.mdl_descripcion,
        idEspecialidad: this.idEspecialidad,
        mdl_nombre: this.mdl_nombre,
        mdl_nombre2: this.mdl_nombre2,
        mdl_apellido: this.mdl_apellido,
        mdl_apellido2: this.mdl_apellido2
      });
      this.apiService.updatePsicologo(this.idUsuario, this.idPersona, this.idDireccion,
        this.mdl_calle, this.mdl_numeracion, this.idComuna, this.mdl_valor, this.mdl_telefono,
        this.mdl_descripcion, this.idEspecialidad, this.mdl_nombre, this.mdl_nombre2,
        this.mdl_apellido, this.mdl_apellido2
      ).subscribe(
        response => {
          console.log('Datos actualizados', response);
          this.isAlertOpen = true;
        },
        error => {
          console.error('Error al actualizar datos', error);
          this.isAlertOpen2 = true;
        }
      );
    }

  }

  updateEspecialidad() {
    console.log('Especialidad: ', this.mdl_estado);
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
