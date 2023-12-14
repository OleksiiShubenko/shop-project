import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './../directive/highlight/highlight.directive';
import { UnderlineDirective } from './../directive/underline/underline.directive';

@NgModule({
  declarations: [ UnderlineDirective ],
  imports: [
    CommonModule,

    //directives
    HighlightDirective
//     UnderlineDirective
  ],
  exports: [ HighlightDirective, UnderlineDirective ]
})
export class SharedModule { }
