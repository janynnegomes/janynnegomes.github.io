import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo } from '../../shared/models/page.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageInfo implements OnInit {

  constructor( private route:ActivatedRoute) { 
    super(route);
  }

  ngOnInit(): void {
  }

}
