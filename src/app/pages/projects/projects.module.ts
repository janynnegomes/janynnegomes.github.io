import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTemplateModule } from 'src/app/shared/components/page-template/page-template.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsListModule } from 'src/app/shared/components/projects-list/projects-list.module';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsListModule,
    PageTemplateModule
  ]
})
export class ProjectsModule { }
