import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarPacientePageRoutingModule } from './editarpaciente-routing.module';
import { EditarPacientePage } from './editarpaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPacientePageRoutingModule
  ],
  declarations: [EditarPacientePage]
})
export class EditarPacientePageModule {}
