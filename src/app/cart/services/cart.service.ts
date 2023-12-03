import { Injectable } from '@angular/core';
import { Product } from './../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartProducts(): Array<Product> {
      return [
        new Product(1, "Drill2", "Outside drill", 30.44),
        new Product(2, "Tiles2", "Home Tile", 74.15),
        new Product(3, "Mirror2", "Home mirror", 5),
      ];
    }

}
