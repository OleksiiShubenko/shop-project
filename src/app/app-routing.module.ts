import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {PathNotFoundComponent} from "./pages";

const routes: Routes = [
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

const extraOptions: ExtraOptions = {
  // bindToComponentInputs is used to allow binding pathParam - taskId to @Input() taskId in task-form component
  bindToComponentInputs: true,
  useHash: false
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, extraOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
