import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  projects:Array<any>= [];
  
  constructor(public service:PortfolioService) { }

  ngOnInit(): void {
    this.projects  = this.service.getPortfolios();
  }

}
