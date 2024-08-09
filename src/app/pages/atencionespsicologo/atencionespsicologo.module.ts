import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtencionespsicologoPageRoutingModule } from './atencionespsicologo-routing.module';

import { AtencionespsicologoPage } from './atencionespsicologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtencionespsicologoPageRoutingModule
  ],
  declarations: [AtencionespsicologoPage]
})
export class AtencionespsicologoPageModule {}
