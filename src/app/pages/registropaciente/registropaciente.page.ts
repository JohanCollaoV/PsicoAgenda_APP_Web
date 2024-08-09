import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { lastValueFrom } from 'rxjs';
import { validateRut } from '@fdograph/rut-utilities'; // Importa la función de validación del RUT

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.page.html',
  styleUrls: ['./registropaciente.page.scss'],
})
export class RegistropacientePage implements OnInit {
  showOptions: boolean = false;  // Añade esta propiedad para manejar el despliegue de opciones
  mdl_rut: string = '';
  mdl_calle: string = '';
  mdl_numero: number | null = null; // Inicializa como null para que esté vacío al principio
  idComuna: number = 0;
  mdl_primerNombre: string = '';
  mdl_segundoNombre: string = '';
  mdl_apellidoPaterno: string = '';
  mdl_apellidoMaterno: string = '';
  mdl_telefono: string = '';
  mdl_fechaNacimiento: string = '';
  mdl_correo: string = '';
  mdl_contrasena: string = '';
  idTipoUsuario: number = 1;
  mdl_comuna: string = '';
  lista_comunas: any[] = [];
  // Propiedades para las alertas
  isAlertOpen: boolean = false;
  isAlertOpen2: boolean = false;
  isAlertOpen3: boolean = false;
  isAlertOpen4: boolean = false;
  isAlertOpen5: boolean = false;
  alertButtons: string[] = ['OK'];

  constructor(private router: Router, private apiService: ApiService) { // Router ya está inyectado aquí
  }

  async ngOnInit() {
    await this.cargarComunas();
  }

  async cargarComunas() {
    try {
      const data = this.apiService.obtenerComunas();
      this.lista_comunas = await lastValueFrom(data) as any[];
      console.log('Lista de comunas cargadas:', this.lista_comunas); // Verificar que la lista de comunas se cargue correctamente
    } catch (error) {
      console.error('Error al cargar las comunas', error);
    }
  }

  validatePhone(event: any) {
    const pattern = /^[0-9]*$/;
    let input = event.target.value;
  
    if (!pattern.test(input)) {
      event.target.value = input.replace(/[^0-9]/g, '');
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }


  validateNumero(event: any) {
    const pattern = /^[0-9]*$/;
    let input = event.target.value;
  
    if (input.length > 5) {
      event.target.value = input.slice(0, 5); // Limita la longitud a 5 dígitos
    }
  
    if (!pattern.test(input)) {
      event.target.value = input.replace(/[^0-9]/g, '');
    }
  }

  register() {
    this.resetAlerts();
    if (this.validateForm()) {
      if (!validateRut(this.mdl_rut)) {
        this.isAlertOpen2 = true; // Set the alert state
        this.mdl_rut = ''; // Limpiar el campo RUT
        return;
      }
      if (!this.validateEmail(this.mdl_correo)) {
        this.isAlertOpen4 = true; // Set the alert state for email
        this.mdl_correo = ''; // Limpiar el campo de correo
        return;
      }
      const transformarFecha = (fecha: string): string => fecha.split('-').reverse().join('-');
      const fechaTransformada = transformarFecha(this.mdl_fechaNacimiento);
      this.apiService.registrarPaciente(
        this.mdl_calle,
        this.mdl_numero!,
        this.idComuna,
        this.mdl_primerNombre,
        this.mdl_segundoNombre,
        this.mdl_apellidoPaterno,
        this.mdl_apellidoMaterno,
        this.mdl_telefono,
        this.mdl_fechaNacimiento,
        this.mdl_correo,
        this.mdl_contrasena,
        this.idTipoUsuario,
        this.mdl_rut
      ).subscribe(
        response => {
          console.log('Paciente registrado correctamente', response);
          this.sendEmail();
          this.isAlertOpen3 = true;
        },
        error => {
          console.error('Error al registrar paciente', error);
          this.isAlertOpen5 = true;
        }
      );
    } else {
      this.isAlertOpen = true;
    }
  }

  validateForm(): boolean {
    return this.mdl_calle !== '' && this.mdl_numero !== null && this.mdl_rut !== '' && this.idComuna !== 0 
      && this.mdl_primerNombre !== '' && this.mdl_segundoNombre !== '' && this.mdl_apellidoPaterno !== '' 
      && this.mdl_apellidoMaterno !== '' && this.mdl_telefono !== '' && this.mdl_fechaNacimiento !== '' && this.mdl_contrasena !== '';
  }

  resetAlerts() {
    this.isAlertOpen = false;
    this.isAlertOpen2 = false;
    this.isAlertOpen3 = false;
    this.isAlertOpen4 = false;
    this.isAlertOpen5 = false;
  }

  goHome() {
    let parametros: NavigationExtras = {
      replaceUrl: true
    }
    this.router.navigate(['home'], parametros);
  }

  // Métodos adicionales para el manejo de opciones y redirección
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
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

  sendEmail() {
    const subject = 'Bienvenido a PsicoAgenda APP';

    const text = 'Hola ' + this.mdl_primerNombre + ',' + '\n\nTe registrate correctamente en PsicoAgenda APP.' +
      '\n\nTu usuario es: ' + this.mdl_correo +
      '\n\nTe Saluda,\nEquipo de PsicoAgenda APP.';

    const html = `
              <p>Hola ${this.mdl_primerNombre},</p>
              <p>Te registrate correctamente en PsicoAgenda APP.</p>
              <p><strong>Usuario: ${this.mdl_correo}</strong></p>
              <p>Te Saluda,</p>
              <p>Equipo de PsicoAgenda APP.</p>
          `;

    this.apiService.sendEmail(this.mdl_correo, subject, text, html).subscribe(
      response => {
        console.log('Email Enviado Correctamente', response);
      },
      error => {
        console.error('Error al enviar correo', error);
      }
    );
  }
}
