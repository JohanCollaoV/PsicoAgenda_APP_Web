import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistropacientePageRoutingModule } from './registropaciente-routing.module';
import { RegistropacientePage } from './registropaciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistropacientePageRoutingModule
  ],
  declarations: [RegistropacientePage]
})
export class RegistropacientePageModule {}
