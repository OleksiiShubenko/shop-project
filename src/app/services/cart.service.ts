import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from './../model/product.model';
import {CartProduct} from './../model/cart-product.model';
import {type Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //we should subscribe on these subject to catch new products and process them
  private channelWithProducts = new Subject<Product>()

  private channelWithProductObserver = this.channelWithProducts.asObservable()
  private subscription!: Subscription

  private cartProducts: Array<CartProduct> = new Array<CartProduct>();

  constructor() {
    this.subscription = this.channelWithProductObserver.subscribe(
      p => {
        let cartProduct = this.findCartProductById(p.id)
        if (cartProduct == null) {
          //immutable approach to add element to array
          this.cartProducts = [...this.cartProducts, new CartProduct(1, p)]
        } else {
          cartProduct.quantity++;
        }
      }
    );
  }

  public getProducts(): Array<CartProduct> {
    return this.cartProducts;
  }

  addProduct(product: Product): void {
    this.channelWithProducts.next(product)
  }

  get totalCost(): number {
    if (this.cartProducts.length == 0) return 0;
    return this.cartProducts.map(p => p.product.price * p.quantity).reduce(function (acc, price) {
      return acc + price
    });
  }

  get totalQuantity(): number {
    if (this.cartProducts.length == 0) return 0;
    return this.cartProducts.map(p => p.quantity).reduce(function (acc, quantity) {
      return acc + quantity
    });
  }

  get isEmptyCart(): boolean {
    return this.cartProducts.length == 0;
  }

  removeProduct(productId: number): void {
    //filter out product by id
    this.cartProducts = this.cartProducts.filter(e => e.product.id != productId)
    console.log(this.cartProducts)
  }

  increaseProductQuantity(productId: number): void {
    let cartProduct = this.findCartProductById(productId);
    if (cartProduct != null) {
      // cartProduct.quantity++;
      //to make sort by quantity work by OrderPipe, need to change list referance
      this.removeProduct(cartProduct.product.id)
      this.cartProducts = [...this.cartProducts, new CartProduct(cartProduct.quantity + 1, cartProduct.product)]
    }
  }

  decreaseProductQuantity(productId: number): void {
    let cartProduct = this.findCartProductById(productId);
    if (cartProduct != null) {
      if (cartProduct.quantity > 1) {
        // cartProduct.quantity--;
        //to make sort by quantity work by OrderPipe, need to change list referance
        this.removeProduct(cartProduct.product.id)
        this.cartProducts = [...this.cartProducts, new CartProduct(cartProduct.quantity - 1, cartProduct.product)]
      } else {
        this.removeProduct(productId);
      }
    }
  }

  removeAllProducts(): void {
    this.cartProducts = [];
  }

  private findCartProductById(productId: number): CartProduct | undefined {
    return this.cartProducts.find(e => e.product.id == productId);
  }

}
