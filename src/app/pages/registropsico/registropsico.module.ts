import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistropsicoPageRoutingModule } from './registropsico-routing.module';
import { RegistropsicoPage } from './registropsico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegistropsicoPageRoutingModule
  ],
  declarations: [RegistropsicoPage]
})
export class RegistropsicoPageModule {}
