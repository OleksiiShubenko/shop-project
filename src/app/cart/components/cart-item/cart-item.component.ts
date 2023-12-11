import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type Product } from './../../../model/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  standalone: true
})
export class CartItemComponent {

  @Input({ required: true, alias: 'cart-product-data-input' })
  product!: Product

  @Output()
  productToDelete: EventEmitter<number> = new EventEmitter<number>()

  deleteProduct(): void {
    this.productToDelete.emit(this.product.id);
  }

  increaseProductAmount(): void {

  }
  decreaseProductAmount(): void {

  }

}
