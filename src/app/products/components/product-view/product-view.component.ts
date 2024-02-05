import {Component, inject, Input, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../../model/product.model";
import {CurrencyPipe, LowerCasePipe, TitleCasePipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-info',
  standalone: true,
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  imports: [ TitleCasePipe, LowerCasePipe, CurrencyPipe ]
})
export class ProductViewComponent implements OnInit{

  //need to add bindToComponentInputs: true to routing config to allow pathParam mapping
  @Input({ alias: 'productId' })
  productId!: string
  product!: Product

  private productService = inject(ProductService)
  private router = inject(Router)

  ngOnInit(): void {
    this.product = this.productService.getProduct(this.productId) ?? new Product()
  }

  onGoBack(): void {
    this.router.navigate(['/product-list'])
  }

}
