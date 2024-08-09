import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionesPacientePage } from './atencionespaciente.page'; // Asegúrate de que el nombre sea correcto

const routes: Routes = [
  {
    path: '',
    component: AtencionesPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionesPacientePageRoutingModule {}
