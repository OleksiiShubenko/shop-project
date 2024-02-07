import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AdminProductFormComponent} from "./components/add-product/admin-product-form.component";
import {AdminProductListComponent} from "./components/list/admin-product-list.component";
import {productResolver} from "./resolvers/product.resolver";

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'product/add',
            component: AdminProductFormComponent
          },
          {
            path: 'product/edit/:productId',
            resolve: {
              loadProductResolver: productResolver
            },
            component: AdminProductFormComponent
          },
          {
            path: '',
            component: AdminProductListComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
