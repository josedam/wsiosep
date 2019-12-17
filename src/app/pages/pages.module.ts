import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestadoresComponent } from './prestadores/prestadores.component';
import { AgGridModule } from 'ag-grid-angular';
import { AfiliadoComponent } from './afiliado/afiliado.component';



@NgModule({
  declarations: [PrestadoresComponent, AfiliadoComponent],
  exports: [PrestadoresComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ]
})
export class PagesModule { }
