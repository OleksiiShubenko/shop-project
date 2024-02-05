import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductListComponent, ProductComponent} from "./components";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ProductsRoutingModule,
    ProductComponent
  ]
})
export class ProductsModule { }
