import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TitleCasePipe, LowerCasePipe, CurrencyPipe} from '@angular/common';
import { type Product } from './../../../model/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],
  standalone: true,
  imports: [ TitleCasePipe, LowerCasePipe, CurrencyPipe ]
})
export class AdminProductComponent {

  @Input({ required: true, alias: 'product-data-input' })
  product!: Product;

  @Output()
  editProduct: EventEmitter<Product> = new EventEmitter<Product>();

  showProductInfo(): void {
    this.editProduct.emit(this.product);
  }

}
