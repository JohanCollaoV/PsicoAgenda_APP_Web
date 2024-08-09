import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'registropsico',
    loadChildren: () => import('./pages/registropsico/registropsico.module').then( m => m.RegistropsicoPageModule)
  },
  {
    path: 'psicologo',
    loadChildren: () => import('./pages/psicologo/psicologo.module').then( m => m.PsicologoPageModule)
  },
  {
    path: 'atencionespaciente',
    loadChildren: () => import('./pages/atencionespaciente/atencionespaciente.module').then( m => m.AtencionesPacientePageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'fichapsicologo',
    loadChildren: () => import('./pages/fichapsicologo/fichapsicologo.module').then( m => m.FichapsicologoPageModule)
  },
  {
    path: 'registropaciente',
    loadChildren: () => import('./pages/registropaciente/registropaciente.module').then( m => m.RegistropacientePageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'atencionespsicologo',
    loadChildren: () => import('./pages/atencionespsicologo/atencionespsicologo.module').then( m => m.AtencionespsicologoPageModule)
  },
  {
    path: 'historialpsicologo',
    loadChildren: () => import('./pages/historialpsicologo/historialpsicologo.module').then( m => m.HistorialpsicologoPageModule)
  },
  {
    path: 'commitpay',
    loadChildren: () => import('./pages/commitpay/commitpay.module').then( m => m.CommitpayPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'mantendorcitas',
    loadChildren: () => import('./pages/mantendorcitas/mantendorcitas.module').then( m => m.MantendorcitasPageModule)
  },
  {
    path: 'mantenedorusuarios',
    loadChildren: () => import('./pages/mantenedorusuarios/mantenedorusuarios.module').then( m => m.MantenedorusuariosPageModule)
  },
  {
    path: 'editarpaciente',
    loadChildren: () => import('./pages/editarpaciente/editarpaciente.module').then( m => m.EditarPacientePageModule)
  },
  {
    path: 'soportepaciente',
    loadChildren: () => import('./pages/soportepaciente/soportepaciente.module').then( m => m.SoportepacientePageModule)
  },
  {
    path: 'editarpsicologo',
    loadChildren: () => import('./pages/editarpsicologo/editarpsicologo.module').then( m => m.EditarPsicologoPageModule)
  },
  {
    path: 'soportepsicologo',
    loadChildren: () => import('./pages/soportepsicologo/soportepsicologo.module').then( m => m.SoportepsicologoPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then( m => m.E404PageModule)
  },





  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
