import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantendorcitasPageRoutingModule } from './mantendorcitas-routing.module';

import { MantendorcitasPage } from './mantendorcitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantendorcitasPageRoutingModule
  ],
  declarations: [MantendorcitasPage]
})
export class MantendorcitasPageModule {}
