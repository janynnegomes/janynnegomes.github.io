import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Portfolio } from 'src/app/shared/models/portfolio.model';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit, AfterViewInit {

  public portfolioInfo:any = {};
  public disqus_shortname:string = environment.site.disqus_shortname;

  constructor( private route:ActivatedRoute, public service:PortfolioService) { 
    
    // read param from URL
    const {name} = route.snapshot.params;

    this.portfolioInfo = this.service.getPortfolioBySlug(name);
  
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const elem = document.createElement('script');

    elem.text = `var disqus_config = function () {
      this.page.url = window.location.href;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = "${this.portfolioInfo?.slug}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      
      (function () { // DON'T EDIT BELOW THIS LINE
          var d = document, s = d.createElement('script');
          s.src = 'https://${this.disqus_shortname}.disqus.com/embed.js';
          s.setAttribute('data-timestamp', +new Date());
          (d.head || d.body).appendChild(s);
      })();`;

      elem.async = true;

      document.querySelector('body')?.appendChild(elem);

  }

}
