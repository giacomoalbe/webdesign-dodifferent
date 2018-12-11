import { Component, OnInit } from '@angular/core';

import {
  Router,
  NavigationEnd,
} from '@angular/router';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  currentUrl: String = "";
  links: Array<Object> = [
    {
      path: "dashboard",
      name: "Dashboard",
    },
    {
      path: "users",
      name: "Utenti",
    },
    {
      path: "categories",
      name: "Categorie",
    },
    {
      path: "expenses",
      name: "Spese",
    }
  ];

  constructor(private router: Router) {
    console.log(this.router);

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
