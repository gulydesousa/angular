import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: [
    `
      .spinner-container {
        align-items: center;
        display: flex;
        background-color: black;
        border-radius: 20px;
        bottom:15px;
        color: white;
        padding: 5px 10px;
        position: fixed;
        right: 15px;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
      }
    `
  ]
})
export class LoadingSpinnerComponent {

}
