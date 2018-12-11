import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { CategoryComponent } from './components/category/category.component';

import { RoutesService } from './services/routes.service';

const routeService = new RoutesService();

console.log(routeService.getRoutes());

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    data: {
      name: "dashboard",
    }
  },
  {
    path: "users",
    component: UserComponent,
    data: {
      name: "users",
    }
  },
  {
    path: "categories",
    component: CategoryComponent,
    data: {
      name: "categories",
    }
  },
  {
    path: "expenses",
    component: ExpenseComponent,
    data: {
      name: "expenses",
    }
  },
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
