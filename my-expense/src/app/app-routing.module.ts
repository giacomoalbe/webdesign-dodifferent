import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { ExpenseComponent } from './expense/expense.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "users",
    component: UserComponent,
  },
  {
    path: "categories",
    component: CategoryComponent,
  },
  {
    path: "expenses",
    component: ExpenseComponent,
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
