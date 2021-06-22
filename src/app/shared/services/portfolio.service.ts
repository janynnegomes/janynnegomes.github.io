import { Injectable } from '@angular/core';
import { projects}  from '../../../assets/data/projects.json';
import { Portfolio } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getPortfolios():Array<Portfolio>{
    return projects;
  }

  getPortfolioBySlug(slug:string){
    return projects.find(proj=>{ return proj.slug ===  slug.trim()}) ;
  }
}
