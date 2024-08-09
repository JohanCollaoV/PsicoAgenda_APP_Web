import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-commitpay',
  templateUrl: './commitpay.page.html',
  styleUrls: ['./commitpay.page.scss'],
})
export class CommitpayPage implements OnInit {

  showOptions: boolean = false;
  transactionDetail: any;
  errorMessage: string = '';
  token_ws: string = '';
  idCita: number = 0;
  idPaciente: number = 0;
  login: boolean = false;
  correo: string = '';
  nombrePsicologo: string = '';
  fechaCita: string = '';
  horaCita: string = '';
  idTipo: number = 0;
  idUsuario: number = 0;
  error: boolean = false;
  idPersona: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      try {
        this.token_ws = params['token_ws'];
        this.idCita = JSON.parse(localStorage.getItem('idCita') || '0');
        this.idPaciente = JSON.parse(localStorage.getItem('idPaciente') || '0');
        this.login = JSON.parse(localStorage.getItem('login') || 'false');
        this.correo = JSON.parse(localStorage.getItem('correo') || '');
        this.nombrePsicologo = JSON.parse(localStorage.getItem('nombrePsicologo') || '');
        this.fechaCita = JSON.parse(localStorage.getItem('fechaCita') || '');
        this.horaCita = JSON.parse(localStorage.getItem('horaCita') || '');
        this.idPersona = JSON.parse(localStorage.getItem('idPersona') || '0');
        this.idUsuario = JSON.parse(localStorage.getItem('idUsuario') || '0');
        console.log("ID USUARIO: " + this.idUsuario)
        console.log(this.idCita);
        console.log(this.idPaciente);
        console.log(this.correo);
        console.log(this.nombrePsicologo);
        console.log(this.fechaCita);
        console.log(this.horaCita);
        
        if (this.token_ws) {
          this.apiService.commitTransaction(this.token_ws).subscribe(
            (response) => {
              console.log("Pago Correcto");
              if (response.status === 'AUTHORIZED' && response.response_code === 0) {
                this.transactionDetail = {
                  card_number: response.card_detail.card_number,
                  transaction_date: new Date(response.transaction_date).toLocaleString(),
                  state: response.status === 'AUTHORIZED' ? 'Aceptado' : 'Rechazado',
                  pay_type: this.getPaymentType(response.payment_type_code),
                  amount: this.formatAmount(response.amount),
                  authorization_code: response.authorization_code,
                  buy_order: response.buy_order,
                };
                this.apiService.confirmarCita(this.idPaciente, 1, this.idCita).subscribe(
                  response => {
                    console.log('Cita Agendada Correctamente', response);
                  },
                  error => {
                    console.error('Error al agendar la cita', error);
                  }
                );
                this.sendEmail();
                localStorage.clear();
              } else {
                this.errorMessage = 'ERROR EN LA TRANSACCIÓN, SE RECHAZA LA TRANSACCIÓN.';
                this.error = true;
                localStorage.clear();
              }
            },
            (error) => {
              this.errorMessage = 'ERROR EN LA TRANSACCIÓN, SE CANCELO EL PAGO.';
              this.error = true;
              localStorage.clear();
            } 
          );
        } else {
          this.errorMessage = 'ERROR EN LA TRANSACCIÓN, SE CANCELO EL PAGO.';
          this.error = true;
          localStorage.clear();
        }
      } catch (error) {
        console.error('Error parsing JSON', error);
        this.router.navigate(['home']);
      }
    });
  }

  sendEmail() {
    const subject = 'Hora Agendada en PsicoAgenda';

    const text = 'Hola!,\n\nAgendaste una hora a traves de PsicoAgenda APP, revisa los detalles.' +
      '\n\nPsicologo: ' + this.nombrePsicologo +
      '\n\nFecha: ' + this.fechaCita +
      '\n\nHora: ' + this.horaCita +
      '\n\nTe Saluda,\nEquipo de PsicoAgenda APP.';

    const html = `
              <p>Hola!,</p>
              <p>Agendaste una hora a traves de PsicoAgenda APP, revisa los detalles.</p>
              <p><strong>Psicologo: ${this.nombrePsicologo}</strong></p>
              <p><strong>Fecha: ${this.fechaCita}</strong></p>
              <p><strong>Hora: ${this.horaCita}</strong></p>
              <p>Te Saluda,</p>
              <p>Equipo de PsicoAgenda APP.</p>
          `;

    this.apiService.sendEmail(this.correo, subject, text, html).subscribe(
      response => {
        console.log('Email Enviado Correctamente', response);
      },
      error => {
        console.error('Error al enviar correo', error);
      }
    );

  }

  downloadPDF() {
    const element = document.getElementById('PDF');
  
    if (element) {
      const scale = 2; // Aumenta este valor para mejorar la calidad
      html2canvas(element, { scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
  
        // Calcula las dimensiones necesarias para el PDF con márgenes
        const imgWidth = canvas.width / scale;
        const imgHeight = canvas.height / scale;
        const margin = 20; // 1 cm de margen en cada lado
        const pageWidth = 350; // Ancho en mm para el PDF
        const pageHeight = (pageWidth * imgHeight) / imgWidth;
  
        const pdf = new jsPDF('landscape', 'mm', [pageWidth, pageHeight]);
  
        // Agrega la imagen al PDF con márgenes
        pdf.addImage(imgData, 'PNG', margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin);
        pdf.save('Comprobante.pdf');
      }).catch(error => {
        console.error('Error al generar el PDF:', error);
      });
    } else {
      console.error('El elemento con id "PDF" no se encontró.');
    }
  }

  goEditar() {
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

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }


  goHome() {
    console.log("Login: ", this.login)
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


  private getPaymentType(code: string): string {
    switch (code) {
      case 'VD':
        return 'Tarjeta de Débito';
      // Agrega otros casos según sea necesario
      default:
        return 'Desconocido';
    }
  }

  private formatAmount(amount: number): string {
    return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  }

}
