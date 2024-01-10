import {Pipe, PipeTransform} from '@angular/core';
import {CartProduct} from "../../model/cart-product.model";

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(products: CartProduct[], sortOrder?: true | false, byPrice?: boolean, byQuantity?: boolean, byName?: boolean): CartProduct[] {
    if (byPrice === undefined && byQuantity === undefined && byName === undefined) {
      return products;
    }
    const order = sortOrder ? 1 : -1;

    return products.sort((p1, p2) => {
      if (byPrice) {
        return (p1.product.price - p2.product.price) * order;
      }
      if (byQuantity) {
        return (p1.quantity - p2.quantity) * order;
      }
      if (byName) {
        return (p1.product.name.localeCompare(p2.product.name)) * order;
      }

      return 0;
    })
  }

}
