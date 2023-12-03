import { Component, Input } from '@angular/core';
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

  onAddToCart(): void {
    console.log("Some product was added to the cart!")
  }

}
