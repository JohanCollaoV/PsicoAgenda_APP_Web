import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_correo: string = '';
  mdl_contrasena: string = '';
  mdl_nueva_contrasena: string = '';
  mdl_repeticion: string = '';
  lista_respuesta: any[] = [];
  contrasena: string = '';
  correo: string = '';
  token: string = '';
  isAlertOpen = false;
  isAlertOpen2 = false;
  isAlertOpen3 = false;
  isAlertOpen4 = false; // Nueva alerta
  alertButtons = ['OK'];
  error_mensaje: any = '';
  idTipo: number = 0;
  idUsuario: number = 0;
  idPersona: number = 0;
  login2: boolean = false;
  recover: boolean = false;
  start: boolean = true;
  update: boolean = false;


  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  async login() {
    this.isAlertOpen2 = false;
    this.isAlertOpen = false;
    this.lista_respuesta = [];
    if (this.mdl_correo != '' && this.mdl_contrasena != '') {
      console.log(this.mdl_correo)
      console.log(this.mdl_contrasena);
      try {
        let data = this.apiService.obtenerUsuario(this.mdl_correo, this.mdl_contrasena)
        let respuesta = await lastValueFrom(data);
        let jsonTexto = JSON.stringify(respuesta);
        let json = JSON.parse(jsonTexto);
        for (let x = 0; x < json.length; x++) {
          this.lista_respuesta.push(json[x]);
          console.log(this.lista_respuesta);
          this.contrasena = this.lista_respuesta[x].Contrasena;
          this.correo = this.lista_respuesta[x].CorreoElectronico;
          this.idTipo = this.lista_respuesta[x].IdTipoUsuario;
          this.idUsuario = this.lista_respuesta[x].IdUsuario;
          this.idPersona = this.lista_respuesta[x].IdPersona;
          console.log(this.contrasena)
          console.log(this.correo)
          console.log('ID: ', this.idUsuario)
          if (this.mdl_contrasena == this.contrasena && this.mdl_correo == this.correo) {
            this.login2 = true;
            if (this.idTipo == 1) {
              let parametros: NavigationExtras = {
                state: {
                  idUsuario: this.idUsuario,
                  idTipoUsuario: this.idTipo,
                  login: this.login2,
                  correo: this.correo,
                  idPersona: this.idPersona
                },
                replaceUrl: true
              }
              this.router.navigate(['cliente'], parametros);
            } else if (this.idTipo == 2) {
              let parametros: NavigationExtras = {
                state: {
                  idUsuario: this.idUsuario,
                  idTipoUsuario: this.idTipo,
                  login: this.login2,
                  correo: this.correo,
                  idPersona: this.idPersona
                },
                replaceUrl: true
              }
              this.router.navigate(['psicologo'], parametros);
            } else if (this.idTipo == 3) {
              let parametros: NavigationExtras = {
                state: {
                  idUsuario: this.idUsuario,
                  idTipoUsuario: this.idTipo,
                  login: this.login2,
                  correo: this.correo,
                  idPersona: this.idPersona
                },
                replaceUrl: true
              }
              this.router.navigate(['admin'], parametros);
            }
            
            
          } else if (this.mdl_contrasena != this.contrasena || this.mdl_correo != this.correo) {
            this.isAlertOpen2 = true;
          }
        }
      } catch (error) {
        this.isAlertOpen2 = true;
      }
    } else {
      this.isAlertOpen = true;
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  navigateHome() {
    let parametros: NavigationExtras = {
      replaceUrl: true
    }

    this.router.navigate(['home'], parametros)
  }

  recuperarContrasena() {
    this.start = false;
    this.recover = true;
  }

  volverLogin() {
    this.start = true;
    this.recover = false;
    this.update = false;
  }

  actualizar() {
    this.start = false;
    this.update = true;
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async sendEmail() {
    this.isAlertOpen2 = false;
    this.isAlertOpen = false;
    this.isAlertOpen3 = false;
    const con = '1';
    if (this.mdl_correo != '') {
      console.log(this.mdl_correo)
      try {
        let data = this.apiService.obtenerUsuario(this.mdl_correo, con)
        let respuesta = await lastValueFrom(data);
        let jsonTexto = JSON.stringify(respuesta);
        let json = JSON.parse(jsonTexto);
        for (let x = 0; x < json.length; x++) {
          this.lista_respuesta.push(json[x]);
          console.log(this.lista_respuesta);
          this.correo = this.lista_respuesta[x].CorreoElectronico;
          console.log(this.correo)
          if (this.mdl_correo == this.correo) {
            const token: string = this.getRandomInt(100000, 999999).toString();
            const subject = 'Recuperacion de Clave PsicoAgenda';
            
            const text = 'Hola!,\n\nSolicitaste recuperar tu clave, debes utilizar la clave temporal para actualizarla.' +
              '\n\nClave Temporal: ' + token +
              '\n\nTe Saluda,\nEquipo de PsicoAgenda APP.';

              const html = `
              <p>Hola!,</p>
              <p>Solicitaste recuperar tu clave, debes utilizar la clave temporal para actualizarla.</p>
              <p><strong>Clave Temporal: ${token}</strong></p>
              <p>Te Saluda,</p>
              <p>Equipo de PsicoAgenda APP.</p>
          `;

            this.apiService.sendEmail(this.mdl_correo, subject, text, html).subscribe(
              response => {
                console.log('Email Enviado Correctamente', response);
                this.isAlertOpen4 = true; // Mostrar alerta cuando el correo se envía correctamente
              },
              error => {
                console.error('Error al enviar correo', error);
              }
            );

            this.apiService.guardarToken(token, this.correo).subscribe(
              response => {
                console.log('Token Guardado Correctamente', response);
              },
              error => {
                console.error('Error al guardar token', error);
              }
            );

          } else if (this.mdl_contrasena != this.contrasena || this.mdl_correo != this.correo) {
            this.isAlertOpen2 = true;
          }
        }
      } catch (error) {
        this.isAlertOpen2 = true;
      }
    } else {
      this.isAlertOpen = true;
    }
  }

  async cambiarContrasena () {
    this.isAlertOpen2 = false;
    this.isAlertOpen = false;
    this.isAlertOpen3 = false;
    const con = '1';
    this.lista_respuesta = [];
    if (this.mdl_correo != '' && this.mdl_contrasena != '' && this.mdl_nueva_contrasena != '' && this.mdl_repeticion != '') {
      console.log(this.mdl_correo)
      console.log(this.mdl_contrasena);
      console.log(this.mdl_nueva_contrasena);
      console.log(this.mdl_repeticion);
      try {
        let data = this.apiService.obtenerUsuario(this.mdl_correo, con)
        let respuesta = await lastValueFrom(data);
        let jsonTexto = JSON.stringify(respuesta);
        let json = JSON.parse(jsonTexto);
        for (let x = 0; x < json.length; x++) {
          this.lista_respuesta.push(json[x]);
          console.log(this.lista_respuesta);
          this.token = this.lista_respuesta[x].Token;
          this.correo = this.lista_respuesta[x].CorreoElectronico;
          console.log(this.correo)
          console.log(this.token)
          console.log('ID: ', this.idUsuario)
          if (this.mdl_contrasena == this.token && this.mdl_nueva_contrasena == this.mdl_repeticion) {
            this.apiService.recuperacionClave(this.mdl_correo, this.mdl_nueva_contrasena).subscribe(
              response => {
                console.log('Contraseña Actualizada', response);
              },
              error => {
                console.error('Error al actualizar contraseña ', error);
              }
            );
            this.isAlertOpen3 = true;
          } else if (this.token != this.token || this.mdl_nueva_contrasena != this.mdl_repeticion) {
            this.isAlertOpen2 = true;
          }
        }
      } catch (error) {
        this.isAlertOpen2 = true;
      }
    } else {
      this.isAlertOpen = true;
    }
  }

  goLogin() {
    let parametros: NavigationExtras = {
      replaceUrl: true
    }
    this.router.navigate(['login'], parametros);
  }

}


