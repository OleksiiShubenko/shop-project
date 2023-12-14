import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { HighlightDirective } from './directive/underline/underline.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//   imports: [ HighlightDirective ]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle') title!: ElementRef<HTMLInputElement>

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
    this.title.nativeElement.textContent = 'Shop Application';
  }
}
