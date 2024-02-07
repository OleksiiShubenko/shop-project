import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminProductFormComponent } from './components/add-product/admin-product-form.component';
import {AdminProductListComponent} from "./components/list/admin-product-list.component";
import {AdminProductComponent} from "./components/item/admin-product.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AdminComponent,
    AdminProductListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminProductComponent,
    AdminProductFormComponent,

    AdminRoutingModule
  ]
})
export class AdminModule { }
