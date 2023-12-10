import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ProductComponent } from './products/components/item/product.component';
import { ProductListComponent } from './products/components/list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FirstComponent,
    ProductListComponent,
    ProductComponent,
    CartListComponent,
    CartItemComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
