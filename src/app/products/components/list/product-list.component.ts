import {Component, OnInit} from '@angular/core';
import {ProductService} from './../../service/product.service';
import {CartService} from './../../../services/cart.service';
import {type Product} from './../../../model/product.model';
import {ProductComponent} from './../item/product.component';
import {AsyncPipe, NgForOf} from '@angular/common';
import {Observable, Subscriber} from "rxjs";

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgForOf, ProductComponent, AsyncPipe]
})
export class ProductListComponent implements OnInit {

  //async pipe can be used with Promise and Observable
  products!: Promise<Product[]>;
  // products!: Observable<Product[]>;

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

  onShowProducts() {
    console.log(this.products)
  }

  onAddProductToCart(product: Product) {
    this.cartService.addProduct(product)
  }
}
