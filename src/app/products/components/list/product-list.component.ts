import {Component, inject, OnInit} from '@angular/core';
import {ProductService} from './../../service/product.service';
import {CartService} from './../../../services/cart.service';
import {type Product} from './../../../model/product.model';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = new Promise<Product[]>((resolve, reject) => {
      resolve(this.productService.getProducts())
    }).catch(error => error) as Promise<Product[]>

    // this.products = new Observable<Product[]>((observer: Subscriber<Product[]>) => {
    //   observer.next(this.productService.getProducts())
    // })
  }

  onAddProductToCart(product: Product) {
    this.cartService.addProduct(product)
  }

  onShowProductInfo(product: Product) {
    this.router.navigate(['/product/info', product.id])
  }
}
