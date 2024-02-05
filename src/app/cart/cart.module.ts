import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import {CartListComponent} from "./components/cart-list/cart-list.component";
import {CartItemComponent} from "./components/cart-item/cart-item.component";


@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,

    CartItemComponent,
    CartListComponent,
    CartRoutingModule
  ]
})
export class CartModule { }
