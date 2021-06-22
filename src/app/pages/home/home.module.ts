import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesGridModule } from '../../shared/components/services-grid/services-grid.module';
import { HomeComponent } from './home.component';
import { RecomendationsModule } from 'src/app/shared/components/recomendations/recomendations.module';
import { ProjectsListModule } from 'src/app/shared/components/projects-list/projects-list.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ServicesGridModule,
    RecomendationsModule,
    ProjectsListModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
