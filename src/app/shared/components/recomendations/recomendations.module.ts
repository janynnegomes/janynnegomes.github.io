import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecomendationsComponent } from './recomendations.component';



@NgModule({
  declarations: [
    RecomendationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RecomendationsComponent
  ]
})
export class RecomendationsModule { }
