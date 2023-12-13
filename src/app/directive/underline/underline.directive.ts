import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true
})
export class UnderlineDirective {

/*
 №1
 // We can expect element here in constructor and then use it in listeners
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter', ['$event'])
    enter(event: Event) {
    this.el.nativeElement.style.textDecoration = 'underline';
  }
*/

//№2
//or use target from event
  @HostListener('mouseenter', ['$event.target'])
  enter(element: HTMLElement) {
    console.log(element)
    element.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave', ['$event.target'])
  leave(element: HTMLElement) {
    console.log(element)
    element.style.textDecoration = 'none';
  }
}
