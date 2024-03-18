import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { calculadoraaa } from './calculadoraaa.page';

const routes: Routes = [
  {
    path: '',
    component: calculadoraaa
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class calculadoraaaRoutingModule {}
