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

  cartProducts: Array<CartProduct> = new Array<CartProduct>();
  constructor() {
      this.subscription = this.channelWithProductObserver.subscribe(
        p => {
          let cartProduct = this.findCartProductById(p.id)
          if(cartProduct == null) {
            this.cartProducts.push(new CartProduct(1, p))
          } else {
            cartProduct.quantity++;
          }
        }
      );
  }

  public getData(): Array<CartProduct> {
    return this.cartProducts;
  }

  pushProductToCart(product: Product): void {
    this.channelWithProducts.next(product)
  }

  getTotalCost(): number {
    if (this.cartProducts.length == 0) return 0;
    return this.cartProducts.map(p => p.product).map(p => p.price).reduce(function (acc, price){ return acc + price});
  }

  getTotalQuantity(): number {
    return this.cartProducts.length;
  }

  deleteProduct(productId: number): void {
    //filter out product by id
    this.cartProducts = this.cartProducts.filter( e => e.product.id != productId)
    console.log(this.cartProducts)
  }
  increaseProductQuantity(productId: number): void {
    let cartProduct = this.findCartProductById(productId);
    if(cartProduct != null) {
      cartProduct.quantity++;
    }
  }

  decreaseProductQuantity(productId: number): void {
    let cartProduct = this.findCartProductById(productId);
        if(cartProduct != null) {
          if(cartProduct.quantity > 1){
            cartProduct.quantity--;
          } else {
            this.deleteProduct(productId);
          }
        }
  }

  private findCartProductById(productId: number): CartProduct | undefined {
    return this.cartProducts.find(e => e.product.id == productId);
  }

}
