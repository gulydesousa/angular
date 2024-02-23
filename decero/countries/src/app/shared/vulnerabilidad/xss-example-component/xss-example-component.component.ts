import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-xss-example',
  templateUrl: './xss-example-component.component.html',
})
export class XssExampleComponent {
  userInput: string = '';
  unsafeHtml: any;

  constructor(private sanitizer: DomSanitizer) {}

  updateHtml() {
    // Directly inserting user input into the DOM without sanitization
    this.unsafeHtml = this.userInput;
  }
}
