import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.page.html',
  styleUrls: ['./e404.page.scss'],
})
export class E404Page implements OnInit {

  showOptions: boolean = false;
  dato: string = '';
  mdl_dato: string = '';
  login: boolean = false;
  lista_especialidades: any = [];

  // Testimonials data
  testimonials = [
    {
      quote: "Una página muy rápida e intuitiva, ahora puedo organizar mis citas con mayor facilidad.",
      author: "Juan Gomez",
      role: "Paciente",
      avatar: "assets/path/to/juan_avatar.png"
    },
    {
      quote: "Muy útil y accesible, de las mejores web disponibles para ofrecer atención a clientes.",
      author: "María Medina",
      role: "Psicóloga de la Universidad de Chile",
      avatar: "assets/path/to/maria_avatar.png"
    },
    {
      quote: "Hasta el momento no he presentado problemas y siempre han resuelto mis consultas.",
      author: "Jesús Riquelme",
      role: "Paciente",
      avatar: "assets/path/to/jesus_avatar.png"
    }
  ];

  constructor(private router: Router, private apiService: ApiService) {}
  

  ngOnInit() {
  }
  
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  buscar() {
    this.login = false;
    let parametros: NavigationExtras = {
      state: {
        dato: this.dato,
        login: this.login
      },
      replaceUrl: true
    }
    this.router.navigate(['busqueda'], parametros);

  }

}
