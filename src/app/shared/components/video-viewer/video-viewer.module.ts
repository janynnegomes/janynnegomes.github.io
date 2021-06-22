import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoViewerComponent } from './video-viewer.component';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
  declarations: [
    VideoViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    VideoViewerComponent
  ]
})
export class VideoViewerModule { }
