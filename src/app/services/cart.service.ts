import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './../model/product.model';
import { CartProduct } from './../model/cart-product.model';
import { type Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //we should subscribe on these subject to catch new products and process them
  private channelWithProducts = new Subject<Product>()

  private channelWithProductObserver = this.channelWithProducts.asObservable()
  private subscription!: Subscription

  cartProducts: Array<Product> = new Array<Product>();
  constructor() {
      this.subscription = this.channelWithProductObserver.subscribe(
        p => this.cartProducts.push(p)
      );
  }

  public getData(): Array<Product> {
    console.log("Get Data: " + this.cartProducts.length)

    return this.cartProducts;
  }

  pushProductToCart(product: Product): void {
    this.channelWithProducts.next(product)
  }

  getTotalCost(): number {
    if (this.cartProducts.length == 0) return 0;
    return this.cartProducts.map(p => p.price).reduce(function (acc, price){ return acc + price});
  }

  getTotalQuantity(): number {
    return this.cartProducts.length;
  }

  deleteProduct(productId: number): void {
    //filter out product by id
    this.cartProducts = this.cartProducts.filter( e => e.id != productId)
  }

}
