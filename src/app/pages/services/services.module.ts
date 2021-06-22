import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridModule } from 'src/app/shared/components/services-grid/services-grid.module';
import { PageTemplateModule } from 'src/app/shared/components/page-template/page-template.module';
import { ServicesComponent } from './services.component';



@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    PageTemplateModule,
    ServicesGridModule    
  ]
})
export class ServicesModule { }
