import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  routes = [
    "ciaone",
    "biellon"
  ];

  constructor() {
  }

  getRoutes() {
    return this.routes;
  }
}
