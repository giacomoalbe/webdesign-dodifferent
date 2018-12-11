import { Component, OnInit } from '@angular/core';

import {  Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  currentUrl: String = "";

  navItems = [
    {
      name: "Dashboard",
      urlName: "dashboard",
      iconClass: "fa fa-cog",
      badgeCount: null,
    },
    {
      name: "Utenti",
      urlName: "users",
      iconClass: "fa fa-user",
      badgeCount: 10,
    },
    {
      name: "Categorie",
      urlName: "categories",
      iconClass: "fa fa-list-ul",
      badgeCount: 29,
    },
    {
      name: "Spese",
      urlName: "expenses",
      iconClass: "fa fa-bitcoin",
      badgeCount: 15,
    },
  ];

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

  itemClicked(item) {
    console.log("Clicked!" + item.urlName);

    //this.router.navigateByUrl(item.urlName);
    this.router.navigate([item.urlName]);
  }

}
