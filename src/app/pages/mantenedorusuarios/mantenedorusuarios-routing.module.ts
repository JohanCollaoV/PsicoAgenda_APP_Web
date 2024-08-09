import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenedorusuariosPage } from './mantenedorusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: MantenedorusuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenedorusuariosPageRoutingModule {}
