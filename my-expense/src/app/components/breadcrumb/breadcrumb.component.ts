import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  mainRoute;

  constructor(private router: Router) {
    this.router.events
      .subscribe((evt) => {

        if (evt instanceof NavigationEnd) {
          this.mainRoute = evt.url.replace("/", "") || "dashboard";
        }
      });
  }

  ngOnInit() {
  }

}
