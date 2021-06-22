import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import { PageTemplateModule } from 'src/app/shared/components/page-template/page-template.module';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    PageTemplateModule
  ],
  exports:[
    ContactComponent
  ],
})
export class ContactModule { }
