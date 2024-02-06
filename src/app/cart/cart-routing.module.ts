import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from "./cart.component";
import {ProcessOrderComponent} from "../pages";
import {canProcessOrderGuard} from "../core";

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'process-order',
    component: ProcessOrderComponent,
    canActivate: [canProcessOrderGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
}
