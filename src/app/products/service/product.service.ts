import { Injectable } from '@angular/core';
import { Product } from './../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    return [
      new Product(1, "Drill", "Outside drill", 29.99),
      new Product(2, "Tiles", "Home Tile", 42.50),
      new Product(3, "Mirror", "Home mirror", 18.25),
    ];
  }
}
