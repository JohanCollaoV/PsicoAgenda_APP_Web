import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPsicologoPage } from './editarpsicologo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPsicologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPsicologoPageRoutingModule {}
