import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { PAGES } from './shared/configs/pages';
import { PAGE_URL } from './shared/enums/page.enum';
import { PortfolioPageResolver } from './shared/resolvers/portfolio-page.resolver';

const routes: Routes = [
  {
    path: PAGES.HOME.path,
    component: HomeComponent,
    data: PAGES.HOME
  },
  {
    path: PAGES.PORTFOLIO.path,
    component: ProjectsComponent,
    data: PAGES.PORTFOLIO.data
  },
  {
    path: `${PAGES.PORTFOLIO.path}/:name`,
    component: PortfolioDetailsComponent,
    data: PAGES.PORTFOLIO.data,
    resolve:{
      info:PortfolioPageResolver
    }
  },
  {
    path: PAGES.SERVICES.path,
    component: ServicesComponent,
    data: PAGES.SERVICES.data
  },
  {
    path: PAGES.ABOUT.path,
    component: AboutComponent,
    data: PAGES.ABOUT.data
  },
  {
    path: PAGES.CONTACT.path,
    component: ContactComponent,
    data: PAGES.CONTACT.data
  },
  {
    path:'**',
    redirectTo:PAGES.HOME.path,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
