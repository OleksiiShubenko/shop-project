import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TitleCasePipe, LowerCasePipe, CurrencyPipe} from '@angular/common';
import { type Product } from './../../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [ TitleCasePipe, LowerCasePipe, CurrencyPipe ]
})
export class ProductComponent {

  @Input({ required: true, alias: 'product-data-input' })
  product!: Product;

  @Output()
  productToCart: EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  productInfo: EventEmitter<Product> = new EventEmitter<Product>();

  showProductInfo(): void {
    console.log("In show product: " + this.product)
    this.productInfo.emit(this.product);
  }

  // onAddToCart(): void {
  //   this.productToCart.emit(this.product);
  // }

}
