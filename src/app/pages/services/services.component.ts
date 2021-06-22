import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from '../../shared/models/page.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent extends PageInfo implements OnInit {

  constructor( private route:ActivatedRoute) { 
   super(route);
  }


  ngOnInit(): void {
  }

}
