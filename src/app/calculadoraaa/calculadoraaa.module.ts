import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { calculadoraaaRoutingModule } from './calculadoraaa-routing.module';

import { calculadoraaa } from './calculadoraaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    calculadoraaaRoutingModule
  ],
  declarations: [calculadoraaa]
})
export class CalculadoraaaPageModule {}
