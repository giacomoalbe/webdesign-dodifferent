import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  headers: Array<Header> = [
    {
      display: "",
      name: "avatar",
    },
    {
      display: "Nome",
      name: "name",
    },
    {
      display: "Cognome",
      name: "surname",
    },
    {
      display: "Email",
      name: "email",
    },
    {
      display: "Categorie",
      name: "categories",
    },
    {
      display: "Spese",
      name: "expenses",
    },
    {
      display: "Saldo",
      name: "balance",
    },
  ];

  users: Array<User> = [
    {
      name: "Giacomo",
      surname: "Alberini",
      email: "giacomoalbe@gmail.com",
      categories: 10,
      expenses: 12,
      balance: 200.5,
      currency: "euro",
    },
    {
      name: "Michael",
      surname: "Andronic",
      email: "mandronic@dodifferent.it",
      categories: 5,
      expenses: 40,
      balance: 145.0,
      currency: "euro",
    },
    {
      name: "Federico",
      surname: "Rizzon",
      email: "frizzon@dodifferent.it",
      categories: 7,
      expenses: 3,
      balance: 50.0,
      currency: "pound",
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }
}

interface Header {
  display: string;
  name: string;
}

interface User {
  avatar?: string;
  name: string;
  surname: string;
  email: string;
  categories?: number;
  expenses: number;
  balance: number;
  currency: string;
}
