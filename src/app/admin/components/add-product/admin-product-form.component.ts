import {Component, inject, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {FormsModule} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Data, Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  standalone: true,
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css'],
  imports: [FormsModule]
})
export class AdminProductFormComponent implements OnInit {

  product!: Product

  productService = inject(ProductService)
  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((data: Data) => {
      //could be loaded or empty product (if does not exist)
      let loadedProduct = data['loadProductResolver'];
      this.product = {...loadedProduct}
    })
  }

  onSaveProduct() {
    if(this.isProductEmpty(this.product)){
      window.alert("Product is empty!")
      return;
    }

    const product = {...this.product}

    console.log(product.id)
    if(!product.id){
      console.log("ADD new")
      this.productService.saveProduct(product)
    } else {
      console.log("Update product: " + product)
      this.productService.updateProduct(product)
    }

    console.log(this.productService.getProducts())
    this.router.navigate(['/admin'])
  }

  isProductEmpty(p: Product): boolean {
    return p.price == 0 && p.name === '' && p.description === ''
  }

  onGoBack() {
    this.router.navigate(['/admin'])
  }
}
