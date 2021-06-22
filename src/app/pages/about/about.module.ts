import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateModule } from 'src/app/shared/components/page-template/page-template.module';
import { AboutComponent } from './about.component';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    PageTemplateModule
  ]
})
export class AboutModule { }
