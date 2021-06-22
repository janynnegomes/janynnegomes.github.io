import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services-grid',
  templateUrl: './services-grid.component.html',
  styleUrls: ['./services-grid.component.scss']
})
export class ServicesGridComponent implements OnInit {

  services: Array<any> = [];
  constructor(public service:ServicesService) { 
    this.services = service.getServices();
  }

  ngOnInit(): void {
  }

}
