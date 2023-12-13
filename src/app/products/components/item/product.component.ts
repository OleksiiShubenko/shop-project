import { Component, Input, Output, EventEmitter} from '@angular/core';
import { type Product } from './../../../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true
})
export class ProductComponent {

  @Input({ required: true, alias: 'product-data-input' })
  product!: Product;

  @Output()
  productToCart: EventEmitter<Product> = new EventEmitter<Product>();

  onAddToCart(): void {
    this.productToCart.emit(this.product);
  }

}
