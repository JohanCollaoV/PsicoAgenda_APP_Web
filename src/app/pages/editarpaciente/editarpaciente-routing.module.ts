import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPacientePage } from './editarpaciente.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPacientePageRoutingModule {}
