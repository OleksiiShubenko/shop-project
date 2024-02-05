import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartShowService {

  cartIsVisible = false

  constructor() {
  }

  showCart(): void {
    this.cartIsVisible = true;
  }

  closeCart(): void {
    this.cartIsVisible = false;
  }
}
