import {Component, OnInit} from '@angular/core';
import {CurrencyPipe, KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {CartProduct} from './../../../model/cart-product.model';
import {CartService} from './../../../services/cart.service';
import {CartItemComponent} from './../cart-item/cart-item.component';
import {OrderByPipe} from "../../../shared/pipe/order-by.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  standalone: true,
  imports: [NgIf, NgForOf, CartItemComponent, CurrencyPipe, OrderByPipe, FormsModule, KeyValuePipe]
})
export class CartListComponent implements OnInit {

  isShowProduct: Boolean = true;

  sortSelectedValue = 'no_sorting'
  selectSortOptions = {
    "no_sorting": "No sorting",
    "by_price": "By price",
    "by_quantity": "By quantity",
    "by_name": "By name"
  };
  selectSortOptionsFun = new Map()
  sortAscOrder = false;
  sortByPrice = false;
  sortByQuantity = false;
  sortByName = false;

  constructor(
//   @Optional() @Self()
    public cartService: CartService
  ) {}

  ngOnInit() {
    console.log("CartListComponent are created")
    this.selectSortOptionsFun.set("no_sorting", function (component: CartListComponent) {
    });
    this.selectSortOptionsFun.set("by_price", function (component: CartListComponent) {
      component.sortByPrice = true
      component.sortByQuantity = false
      component.sortByName = false
    });
    this.selectSortOptionsFun.set("by_quantity", function (component: CartListComponent) {
      component.sortByPrice = false
      component.sortByQuantity = true
      component.sortByName = false
    });
    this.selectSortOptionsFun.set("by_name", function (component: CartListComponent) {
      component.sortByPrice = false
      component.sortByQuantity = false
      component.sortByName = true
    });
  }

  get cartProducts(): Array<CartProduct> {
    return this.cartService.getProducts();
  }

  get totalCost(): number {
    return this.cartService.totalCost;
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get isEmptyCart(): boolean {
    return this.cartService.isEmptyCart
  }

  onShowHideProduct(): void {
    this.isShowProduct = !this.isShowProduct
  }

  processProductDelete(productId: number) {
    console.log("Delete product with id: " + productId + " from cart!");
    this.cartService.removeProduct(productId);
  }

  processProductToIncrease(productId: number) {
    console.log("Increase product amount with id: " + productId);
    this.cartService.increaseProductQuantity(productId);
  }

  processProductToDecrease(productId: number) {
    console.log("Decrease product amount with id: " + productId);
    this.cartService.decreaseProductQuantity(productId);
  }

  removeAllProducts() {
    this.cartService.removeAllProducts();
  }

  onSortProducts(event: Event) {
    let sortOption = (event.target as HTMLSelectElement).value.split(":")[1].trim();
    console.log("Sort option: " + sortOption)

    this.selectSortOptionsFun.get(sortOption)!!(this)
  }

  onOrderChange() {
    this.sortAscOrder = !this.sortAscOrder;
  }
}
