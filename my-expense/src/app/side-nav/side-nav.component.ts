import { Component, OnInit } from '@angular/core';

import {
  Router,
  NavigationEnd,
} from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  currentUrl: String = "";

  constructor(private router: Router) {
    this.router.events
      .subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.currentUrl = evt.url.replace("/", "");
        }
      });
  }

  ngOnInit() {
  }

}
