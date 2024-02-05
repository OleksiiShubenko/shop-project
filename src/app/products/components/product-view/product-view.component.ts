import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../../model/product.model";
import {CurrencyPipe, LowerCasePipe, NgIf, TitleCasePipe} from "@angular/common";
import {Router} from "@angular/router";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-product-info',
  standalone: true,
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  imports: [TitleCasePipe, LowerCasePipe, CurrencyPipe, NgIf]
})
export class ProductViewComponent implements OnInit {

  //need to add bindToComponentInputs: true to routing config to allow pathParam mapping
  @Input({alias: 'productId'})
  productId!: string
  product!: Product

  buyProductClicked = 0

  private productService = inject(ProductService)
  private cartService = inject(CartService)
  private router = inject(Router)

  ngOnInit(): void {
    this.product = this.productService.getProduct(this.productId) ?? new Product()
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.product)
    this.buyProductClicked += 1;
  }

  onGoBack(): void {
    this.router.navigate(['/product-list'])
  }

}
