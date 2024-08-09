import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenedorusuariosPageRoutingModule } from './mantenedorusuarios-routing.module';

import { MantenedorusuariosPage } from './mantenedorusuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenedorusuariosPageRoutingModule
  ],
  declarations: [MantenedorusuariosPage]
})
export class MantenedorusuariosPageModule {}
