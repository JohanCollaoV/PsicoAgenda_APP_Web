import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistropsicoPage } from './registropsico.page';

const routes: Routes = [
  {
    path: '',
    component: RegistropsicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistropsicoPageRoutingModule {}
