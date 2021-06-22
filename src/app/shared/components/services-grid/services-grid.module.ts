import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridComponent } from './services-grid.component';



@NgModule({
  declarations: [
    ServicesGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ServicesGridComponent
  ]
})
export class ServicesGridModule { }
