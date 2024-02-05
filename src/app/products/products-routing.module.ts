import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./components";
import {ProductViewComponent} from "./components/product-view/product-view.component";
import {CartComponent} from "../cart/cart.component";

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product/info/:productId',
    component: ProductViewComponent
  },
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full'
  },
  {
    path: 'showCartOutlet',
    component: CartComponent,
    outlet: 'cartOutletName'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
