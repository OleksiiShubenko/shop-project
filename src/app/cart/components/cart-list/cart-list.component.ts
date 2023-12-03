import { Component, OnInit} from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { Product } from './../../../model/product.model';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  standalone: true,
  imports: [ NgIf, NgForOf ]
})
export class CartListComponent implements OnInit {

  cartProducts!: Array<Product>;
  isProductExist!: Boolean;

  isShowProduct!: Boolean;

  constructor(private cartService: CartService) {}

  ngOnInit(){
    this.cartProducts = this.cartService.getCartProducts();
    console.log(this.cartProducts)
    this.isProductExist = this.cartProducts.length > 0;
    this.isShowProduct = this.isProductExist;
  }

  onShowHideProduct(): void {
    this.isShowProduct = !this.isShowProduct
  }

  trackByproducts(index: number, product: Product): number {
    console.log("Index: " + index)
    return product.id;
  }

}
