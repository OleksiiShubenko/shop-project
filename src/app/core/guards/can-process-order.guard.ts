import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {CartService} from "../../services/cart.service";

export const canProcessOrderGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService)
  console.log("Can activate guard is called")
  return !cartService.isEmptyCart;
};
