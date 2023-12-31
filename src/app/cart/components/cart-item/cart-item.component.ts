import { Component, Input, Output, EventEmitter } from '@angular/core';
import { JsonPipe, TitleCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { type Product } from './../../../model/product.model';
import { HighlightDirective } from './../../../directive/highlight/highlight.directive';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  standalone: true,
  imports: [ HighlightDirective, JsonPipe, TitleCasePipe, LowerCasePipe, CurrencyPipe ]
})
export class CartItemComponent {

  public testCurrency = 0.45

  @Input({ required: true, alias: 'cart-product-data-input' })
  product!: Product
  @Input({ required: true, alias: 'cart-product-quantity-input' })
  productQuantity!: number

  @Output()
  productToDelete: EventEmitter<number> = new EventEmitter<number>()
  @Output()
  productToIncrease: EventEmitter<number> = new EventEmitter<number>()
  @Output()
  productToDecrease: EventEmitter<number> = new EventEmitter<number>()

  deleteProduct(): void {
    this.productToDelete.emit(this.product.id);
  }

  increaseProductQuantity(): void {
    this.productToIncrease.emit(this.product.id)
  }
  decreaseProductQuantity(): void {
    this.productToDecrease.emit(this.product.id)
  }

}
