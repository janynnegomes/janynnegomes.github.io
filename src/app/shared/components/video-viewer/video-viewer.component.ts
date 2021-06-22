import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {

  @Input() videoId:string = '';
  constructor(public sanitizer: DomSanitizer) { }
  //constructor() { }

  ngOnInit(): void {
  }

}
