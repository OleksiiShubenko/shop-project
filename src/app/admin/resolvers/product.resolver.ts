import {ResolveFn, Router} from '@angular/router';
import {Product} from "../../model/product.model";
import {inject} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {catchError, EMPTY, of, switchMap, take} from "rxjs";

export const productResolver: ResolveFn<Product> = (route, state) => {
  const productService = inject(ProductService);
  const router = inject(Router);

  if (!route.paramMap.has('productId')) {
    return of(new Product())
  }
  const id = route.paramMap.get('productId')!;

  return of(productService.getProduct(id) ?? new Product())
}

//   return of(productService.getProduct(id))
//     .pipe(
//       switchMap((p: Product) => {
//         if (p) {
//           return of(p);
//         } else {
//           router.navigate(['/admin'])
//
//           return EMPTY
//         }
//       }),
//       take(1),
//       catchError(() => {
//         router.navigate(['/admin']);
//
//         // catchError MUST return observable
//         return EMPTY;
//       })
//     )
// };
