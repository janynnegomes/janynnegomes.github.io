import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesGridModule } from '../shared/components/services-grid/services-grid.module';
import { HomeModule } from './home/home.module';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';
import { AboutModule } from './about/about.module';
import { PortfolioDetailsModule } from './portfolio-details/portfolio-details.module';
import { PageTemplateModule } from '../shared/components/page-template/page-template.module';
import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [  
  ],
  imports: [
    CommonModule,
    PageTemplateModule,
    HomeModule, 
    ProjectsModule,
    ContactModule,
    AboutModule,
    ServicesModule,
    PortfolioDetailsModule
  ]
})
export class PagesModule { }
