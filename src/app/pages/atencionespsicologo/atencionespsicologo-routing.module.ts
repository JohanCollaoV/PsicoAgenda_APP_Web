import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtencionespsicologoPage } from './atencionespsicologo.page';

const routes: Routes = [
  {
    path: '',
    component: AtencionespsicologoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtencionespsicologoPageRoutingModule {}
