import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlightTagDirective]',
  standalone: true
})
export class HighlightDirective  {

  element!: HTMLInputElement
  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  @HostListener('click')
  clicked(): void {
    console.log("component is clicked")
  }

  @HostListener('mouseenter', ['$event.target'])
  mouseEnter(element: HTMLElement): void {
    console.log("mouse is entered to the component", this.el.nativeElement.style)
//      this.element.style.border = '2px solid red';
     this.element.style.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave', ['$event.target'])
  mouseLeave(element: HTMLElement): void {
    console.log("mouse is entered to the component", this.el.nativeElement.style)
     this.el.nativeElement.style.backgroundColor = '';
  }

}
