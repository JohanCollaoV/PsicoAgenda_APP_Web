import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPsicologoPageRoutingModule } from './editarpsicologo-routing.module';

import { EditarPsicologoPage } from './editarpsicologo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPsicologoPageRoutingModule
  ],
  declarations: [EditarPsicologoPage]
})
export class EditarPsicologoPageModule {}
