import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {Observable, Subscriber} from "rxjs";
import {type Product} from '../../../model/product.model';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products!: Observable<Product[]>;

  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.products = new Observable<Product[]>((observer: Subscriber<Product[]>) => {
      observer.next(this.productService.getProducts())
    })
  }

  onEditProduct(product: Product) {
    // {relativeTo: this.activatedRoute} is needed to specify that me navigate relative to /admin
    this.router.navigate(['product/edit', product.id], {relativeTo: this.activatedRoute})
  }

}
