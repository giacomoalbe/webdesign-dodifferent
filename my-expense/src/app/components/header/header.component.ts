import { Component, OnInit } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentHeader;

  headerItems = {
    "dashboard": {
      displayName: "Dashboard",
      iconClass: "fa fa-cog",
      actionsPlaceholder: "Aggiungi Contenuto",
      actions: [
        {
          displayName: "Aggiungi Utente",
        },
        {
          displayName: "Aggiungi Categoria",
        },
        {
          displayName: "Aggiungi Spesa",
        },
      ]
    },
    "users": {
      displayName: "Utenti",
      iconClass: "fa fa-user",
      actionsPlaceholder: "Aggiungi Contenuto",
      actions: [
        {
          displayName: "Aggiungi Utente",
        }
      ]
    },
    "categories": {
      displayName: "Categorie",
      iconClass: "fa fa-list-ul",
      actionsPlaceholder: "Aggiungi Contenuto",
      actions: [
        {
          displayName: "Aggiungi Categoria",
        },
      ]
    },
    "expenses": {
      displayName: "Spese",
      iconClass: "fa fa-bitcoin",
      actionsPlaceholder: "Aggiungi Contenuto",
      actions: [
        {
          displayName: "Aggiungi Spesa",
        },
      ]
    },
  };

  constructor(private router: Router) {
    this.router.events
      .subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
          this.currentHeader = this.headerItems[evt.url.replace("/", "")];
        }
      });
  }


  ngOnInit() {
  }

}
