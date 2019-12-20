import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdCuitPipe } from './ed-cuit.pipe';



@NgModule({
  declarations: [EdCuitPipe],
  imports: [
    CommonModule
  ],
  exports:  [EdCuitPipe]
})
export class PipesModule { }
