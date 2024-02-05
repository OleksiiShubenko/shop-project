import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PathNotFoundComponent} from "./pages/path-not-found/path-not-found.component";

const routes: Routes = [

  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
