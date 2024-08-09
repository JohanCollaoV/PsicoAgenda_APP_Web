import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importante para el soporte de componentes Ionic
import { AtencionesPacientePageRoutingModule } from './atencionespaciente-routing.module';
import { AtencionesPacientePage } from './atencionespaciente.page'; // Corrige el nombre aquí también

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtencionesPacientePageRoutingModule
  ],
  declarations: [AtencionesPacientePage] // Asegúrate de que el nombre del componente aquí sea correcto
})
export class AtencionesPacientePageModule {}
