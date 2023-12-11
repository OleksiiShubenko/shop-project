import { Product } from './product.model';

export class CartProduct {
  constructor(
    public amount: number,
    public product: Product
  ) {}
}
