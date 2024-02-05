import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CartListComponent} from './cart/components/cart-list/cart-list.component';
import {CartItemComponent} from './cart/components/cart-item/cart-item.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from "./app-routing.module";
import {ProductsModule} from './products/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,

    CartListComponent,
    CartItemComponent,

    ProductsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
