import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() title:string='';
  @Input() mainUrl:string='';
  @Input() menu:Array<any>=[];
  @Input() type:string = 'top';

  constructor() { }

  ngOnInit(): void {
  }

}
