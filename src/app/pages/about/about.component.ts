import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from '../../shared/models/page.model';
import { AutoPageInfo } from '../../shared/decorators/page.decorator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
@AutoPageInfo()
export class AboutComponent extends PageInfo implements OnInit {

  constructor( private route:ActivatedRoute) { 
   super(route);
  }

  ngOnInit(): void {
  }

}
