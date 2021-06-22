import { Component, OnInit } from '@angular/core';
import { PAGES } from './shared/configs/pages';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public menu:Array<any> = [];
  public site:any= {};

  title = 'portfolio';

  ngOnInit(){
    this.menu = [
      PAGES.HOME,
      PAGES.PORTFOLIO,
      PAGES.SERVICES,
      PAGES.ABOUT,
    PAGES.CONTACT];

    this.site = environment.site;
  }
}
