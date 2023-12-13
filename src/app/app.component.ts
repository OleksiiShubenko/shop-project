import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle') title!: ElementRef<HTMLInputElement>

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
    this.title.nativeElement.textContent = 'Shop Application';
  }
}
