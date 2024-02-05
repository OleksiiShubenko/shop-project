import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./components";

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
