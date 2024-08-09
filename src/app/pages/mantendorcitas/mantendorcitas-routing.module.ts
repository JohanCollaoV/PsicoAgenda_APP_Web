import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantendorcitasPage } from './mantendorcitas.page';

const routes: Routes = [
  {
    path: '',
    component: MantendorcitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantendorcitasPageRoutingModule {}
