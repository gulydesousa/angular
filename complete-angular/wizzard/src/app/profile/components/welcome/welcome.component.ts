import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})

export class WelcomeComponent {

  constructor(@Inject(Router) private router: Router) { }

  ngOnInit() {
  }

  goWizzard() {
    this.router.navigate(['/profile/wizzard']);
  }
}
