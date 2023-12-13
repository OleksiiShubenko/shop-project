import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { CartService } from './../../../services/cart.service';
import { type Product } from './../../../model/product.model';
import { ProductComponent } from './../item/product.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [NgForOf, ProductComponent]
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onShowProducts(){
    console.log(this.products)
  }

  onAddProductToCart(product: Product){
    this.cartService.pushProductToCart(product)
  }
}
