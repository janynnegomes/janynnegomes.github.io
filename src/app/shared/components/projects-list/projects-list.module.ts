import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';



@NgModule({
  declarations: [
    ProjectsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProjectsListComponent
  ]
})
export class ProjectsListModule { }
