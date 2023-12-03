import { Component } from '@angular/core';
import { CategoryType } from './category-type.enum'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  standalone: true // if it will not be standalone then it should be provided NgModule is declarations
})
export class FirstComponent {
  name: string = "First Component name"
  description: string = "Component Description"
  price: number = 12.4
  categoryType: CategoryType = CategoryType.ROOT
  isAvailable: boolean = true

}
