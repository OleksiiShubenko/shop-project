import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  private router = inject(Router)

  onProcessOrderShow() {
    this.router.navigate(['/process-order'])
  }
}
