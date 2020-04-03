import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Novopay-Web-App';
  footerPrivacyUrl: string;
  footerTermsUrl: string;
  routerUrl: boolean = false;
  chatBoxShow: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url.length === 1) {
          this.routerUrl = false;
        }
        else if (e.url !== '/login') {
          this.routerUrl = true;
        } else {
          this.routerUrl = false;
        }

      }
    });
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}