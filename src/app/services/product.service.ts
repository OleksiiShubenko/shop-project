import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  private products = [
    new Product(1, "Drill", "Outside drill", 29.99, true),
    new Product(2, "Tiles", "Home Tile", 42.50, true),
    new Product(3, "Mirror", "Home mirror", 18.25, true),
    new Product(4, "Window", "-", 52.40, true),
    new Product(5, "Cup", "Small tea cup", 4.50, true),
  ];

  getProducts(): Array<Product> {
    return this.products;
  }

  getProduct(productId: string): Product | undefined {
    return this.getProducts().find(p => p.id == +productId)
  }

  saveProduct(product: Product): void {
    product.id = this.products.length + 1;
    this.products.push(product)
  }

  updateProduct(product: Product) {
    const i = this.products.findIndex(p => p.id === product.id)
    console.log("Product changed: " + i)
    if (i > -1) {
      this.products.splice(i, 1, product);
    }
  }
}
