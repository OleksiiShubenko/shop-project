import { Injectable } from '@angular/core';
import { Product } from './../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, "Drill", "Outside drill", 29.99, true),
      new Product(2, "Tiles", "Home Tile", 42.50, true),
      new Product(3, "Mirror", "Home mirror", 18.25, false),
      new Product(4, "Window", "-", 52.40, false),
      new Product(5, "Cup", "Small tea cup", 4.50, true),
    ];
  }
}
