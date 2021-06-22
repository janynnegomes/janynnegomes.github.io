import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoPageInfo } from '../../shared/decorators/page.decorator';
import { PageInfo } from '../../shared/models/page.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
@AutoPageInfo()
export class ProjectsComponent extends PageInfo implements OnInit {

  constructor( private route:ActivatedRoute) { 
   super(route);
  }

  ngOnInit(): void {
  }

}
