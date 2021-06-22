import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { PageTemplateModule } from 'src/app/shared/components/page-template/page-template.module';
import { ProjectsListModule } from 'src/app/shared/components/projects-list/projects-list.module';
import { VideoViewerComponent } from 'src/app/shared/components/video-viewer/video-viewer.component';
import { VideoViewerModule } from 'src/app/shared/components/video-viewer/video-viewer.module';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';



@NgModule({
  declarations: [
    PortfolioDetailsComponent
  ],
  imports: [
    CommonModule,
    PageTemplateModule,
    ProjectsListModule,
    VideoViewerModule,
    SliderModule
  ]
})
export class PortfolioDetailsModule { }
