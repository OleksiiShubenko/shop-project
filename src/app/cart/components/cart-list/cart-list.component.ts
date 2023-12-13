import { Component, OnInit} from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { Product } from './../../../model/product.model';
import { CartProduct } from './../../../model/cart-product.model';
import { CartService } from './../../../services/cart.service';
import { CartItemComponent } from './../cart-item/cart-item.component';
import { HighlightDirective } from './../../../directive/highlight/highlight.directive';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  standalone: true,
  imports: [ NgIf, NgForOf, CartItemComponent, HighlightDirective ]
})
export class CartListComponent implements OnInit {

  isShowProduct: Boolean = true;

  constructor(public cartService: CartService) {}

  ngOnInit(){
    console.log("CartListComponent are created")
  }

  get cartProducts(): Array<CartProduct> {
    return this.cartService.getData();
  }

  get totalCost(): number {
    return this.cartService.getTotalCost();
  }

  get totalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  onShowHideProduct(): void {
    this.isShowProduct = !this.isShowProduct
  }

//   trackByproducts(index: number, product: Product): number {
//     console.log("Index: " + index)
//     return product.id;
//   }

  processProductDelete(productId: number){
    console.log("Delete product with id: " + productId + " from cart!");
    this.cartService.deleteProduct(productId);
  }

  processProductToIncrease(productId: number){
    console.log("Increase product amount with id: " + productId);
    this.cartService.increaseProductQuantity(productId);
  }

  processProductToDecrease(productId: number){
    console.log("Decrease product amount with id: " + productId);
    this.cartService.decreaseProductQuantity(productId);
  }

}
