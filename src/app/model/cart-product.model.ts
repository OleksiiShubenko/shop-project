import { Product } from './product.model';

export class CartProduct {
  constructor(
    public quantity: number,
    public product: Product
  ) {}
}
