import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Router} from "@angular/router";
import {CartShowService} from "../../service/cart-show.service";
import {type Product} from '../../../model/product.model';

@Component({
  selector: 'app-product-list',
  // standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //async pipe can be used with Promise and Observable
  products!: Promise<Product[]>;

  // products!: Observable<Product[]>;

  private router = inject(Router)
  cartShowService = inject(CartShowService)

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.products = new Promise<Product[]>((resolve, reject) => {
      resolve(this.productService.getProducts())
    }).catch(error => error) as Promise<Product[]>

    // this.products = new Observable<Product[]>((observer: Subscriber<Product[]>) => {
    //   observer.next(this.productService.getProducts())
    // })
  }

  onShowProductInfo(product: Product) {
    this.router.navigate(['/product/info', product.id])
  }

  onShowCart() {
    this.router.navigate([{outlets: {cartOutletName: 'showCartOutlet'}}])
    this.cartShowService.showCart()
  }

  onCloseCart() {
    this.router.navigate([{outlets: {cartOutletName: null}}])
    this.cartShowService.closeCart()
  }
}
