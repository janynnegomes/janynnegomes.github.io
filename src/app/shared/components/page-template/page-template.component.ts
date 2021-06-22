import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit {

  @Input() title:string = '';
  @Input() excerpt:string = '';
  @Input() icon:string = '';
  @Input() tags:Array<string> = [];
  @Input() allowComments:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
