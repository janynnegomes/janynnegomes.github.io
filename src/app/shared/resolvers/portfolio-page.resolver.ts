import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { PageInfo } from "../models/page.model";
import { PortfolioService } from "../services/portfolio.service";

@Injectable({ providedIn: 'root' })
export class PortfolioPageResolver implements Resolve<PageInfo> {
  constructor(public service:PortfolioService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any{
        return this.service.getPortfolioBySlug(route.params['name']);
  }
}