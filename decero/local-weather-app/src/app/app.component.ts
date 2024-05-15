import { Component, signal } from '@angular/core';

const darkClassName = 'dark-theme'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'local-weather-app';
  //readonly toggleState = signal(localStorage.getItem(darkClassName) === 'true')

}
