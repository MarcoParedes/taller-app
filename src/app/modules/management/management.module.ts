import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { Ejemplo2Component } from './components/ejemplo2/ejemplo2.component';
import { PruebaService } from "./services/prueba.service";

import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [EjemploComponent, Ejemplo2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EjemploComponent },
      { path: '**', component: Ejemplo2Component }
    ])
  ],
  providers: [PruebaService]
})
export class ManagementModule { }
