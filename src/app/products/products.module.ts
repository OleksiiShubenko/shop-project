import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductListComponent, ProductComponent} from "./components";
import {FormsModule} from "@angular/forms";
import { ProductViewComponent } from './components/product-view/product-view.component';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductViewComponent,
    ProductComponent,

    ProductsRoutingModule,
  ]
})
export class ProductsModule {



}
