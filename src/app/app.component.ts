import { Component, ViewChild, ElementRef, AfterViewInit, Inject, inject } from '@angular/core';
// import { HighlightDirective } from './directive/underline/underline.directive';
import { GeneratorService, GenerateNFactory, Generator3 } from './services/generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    GeneratorService,
    //we created token with name Generator3. When it will be injected, angular will use factory which return a number inside.
    //deps are used to specify services that should be injected to GenerateNFactory(5)
    { provide: Generator3, useFactory: GenerateNFactory(5), deps: [ GeneratorService ] }
  ]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle') title!: ElementRef<HTMLInputElement>

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
    this.title.nativeElement.textContent = 'Shop Application';
  }

  public generatedNumber: number;

  constructor(
//   #1
//     @Inject(Generator3) public generator3: number
  ) {
//   #2
    this.generatedNumber = inject(Generator3)
   }

}
