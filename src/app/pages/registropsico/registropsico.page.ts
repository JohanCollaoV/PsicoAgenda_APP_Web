import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-registropsico',
  templateUrl: './registropsico.page.html',
  styleUrls: ['./registropsico.page.scss'],
})
export class RegistropsicoPage implements OnInit {
  showOptions: boolean = false;  // Añade esta propiedad para manejar el despliegue de opciones
  mdl_rut: string = '';
  rut: string = '';
  isAlertOpen = false;
  isAlertOpen2 = false;
  isAlertOpen3 = false;
  alertButtons = ['OK'];
  lista_respuesta: any[] = [];
  lista_comunas: any[] = [];
  rutValido = false;
  mdl_nombre: string = '';
  mdl_nombre2: string = '';
  mdl_apellido: string = '';
  mdl_apellido2: string = '';
  nombre_completo: string = '';
  idComuna: number = 0;
  idTipo: number = 2;
  idEspecialidad: number = 1;
  mdl_numeracion: number | null = null; // Inicializa como null para que esté vacío al principio
  mdl_telefono: string = '';
  mdl_fecha: string = '';
  mdl_correo: string = '';
  mdl_contrasena: string = '';
  mdl_valor: string = '';
  mdl_calle: string = '';
  isAlertOpen4: boolean = false;
  isAlertOpen5: boolean = false;

  constructor(private router: Router, private apiService: ApiService) {}

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

  transformDate(dateString: string): string {
    // Divide la fecha en día, mes y año
    const [day, month, year] = dateString.split('-');
    
    // Retorna la fecha en el nuevo formato
    return `${year}-${month}-${day}`;
  }

  async validarPrestador() {
    this.isAlertOpen2 = false;
    this.isAlertOpen = false;
    this.lista_respuesta = [];
    this.rutValido = false;
    if (this.mdl_rut != '') {
      console.log('Validando prestador con rut:', this.mdl_rut);
      try {
        let data = this.apiService.validarPrestadores(this.mdl_rut);
        let respuesta = await lastValueFrom(data);
        console.log('Respuesta de la API:', respuesta);
        let jsonTexto = JSON.stringify(respuesta);
        let json = JSON.parse(jsonTexto);
        for (let x = 0; x < json.length; x++) {
          this.lista_respuesta.push(json[x]);
          console.log('Lista de respuesta:', this.lista_respuesta);
          this.rut = this.lista_respuesta[x].rut.toString() + '-' + this.lista_respuesta[x].dv;
          console.log('Rut validado:', this.rut);
          if (this.mdl_rut == this.rut) {
            this.rutValido = true;
            this.nombre_completo = this.lista_respuesta[x].nombres;
            let nombres_separados = this.nombre_completo.split(' ');
            this.mdl_nombre = nombres_separados[0];
            this.mdl_nombre2 = nombres_separados[1];
            this.mdl_apellido = this.lista_respuesta[x].apellido_paterno;
            this.mdl_apellido2 = this.lista_respuesta[x].apellido_materno;
            this.mdl_fecha = this.transformDate(this.lista_respuesta[x].fecha_nacimiento);
            console.log('Rut válido:', this.mdl_rut);
          }
        }
      } catch (error) {
        console.error('Error al validar el prestador:', error);
        this.isAlertOpen2 = true;
      }
    } else {
      this.isAlertOpen = true;
    }
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    let parametros: NavigationExtras = {
      replaceUrl: true
    };
    this.router.navigate([route], parametros);
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


  register() {
    this.isAlertOpen = false;
    this.isAlertOpen2 = false;
    this.isAlertOpen3 = false;
    this.isAlertOpen4 = false;
    this.isAlertOpen5 = false;
  
    if (
      this.mdl_calle !== '' && this.mdl_numeracion !== null && this.mdl_rut !== '' && this.idComuna !== 0 &&
      this.mdl_nombre !== '' && this.mdl_nombre2 !== '' && this.mdl_apellido !== '' &&
      this.mdl_apellido2 !== '' && this.mdl_telefono !== '' && this.mdl_fecha !== '' && this.mdl_contrasena !== ''
    ) {
      if (!this.validateEmail(this.mdl_correo)) {
        this.isAlertOpen4 = true; // Set the alert state for email
        return;
      }
  
      const transformarFecha = (fecha: string): string => fecha.split('-').reverse().join('-');
      const fechaTransformada = transformarFecha(this.mdl_fecha);
  
      this.apiService.registrarPsicologo(
        this.mdl_calle,
        this.mdl_numeracion!,
        this.idComuna,
        this.mdl_nombre,
        this.mdl_nombre2,
        this.mdl_apellido,
        this.mdl_apellido2,
        this.mdl_telefono,
        this.mdl_fecha,
        this.mdl_correo,
        this.mdl_contrasena,
        this.idTipo,
        this.mdl_rut,
        this.mdl_valor,
        this.idEspecialidad
      ).subscribe(
        response => {
          console.log('Psicolo Registrado Correctamente', response);
          this.sendEmail();
          this.isAlertOpen3 = true;
        },
        error => {
          console.error('Error al registrarse', error);
          this.isAlertOpen5 = true;
        }
      );
    } else {
      this.isAlertOpen = true;
    }
  }

  //VALIDADOR PARA NUMERO TELEFONICO
  validatePhone(event: any) {
    const pattern = /^[0-9]*$/;
    let input = event.target.value;
  
    if (!pattern.test(input)) {
      event.target.value = input.replace(/[^0-9]/g, '');
    }
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

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }


  goHome() {
    let parametros: NavigationExtras = {
      replaceUrl: true
    };
    this.router.navigate(['home'], parametros);
  }

  sendEmail() {
    const subject = 'Bienvenido a PsicoAgenda APP';

    const text = 'Hola ' + this.mdl_nombre + ',' + '\n\nTe registrate correctamente en PsicoAgenda APP.' +
      '\n\nTu usuario es: ' + this.mdl_correo +
      '\n\nTe Saluda,\nEquipo de PsicoAgenda APP.';

    const html = `
              <p>Hola ${this.mdl_nombre},</p>
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
