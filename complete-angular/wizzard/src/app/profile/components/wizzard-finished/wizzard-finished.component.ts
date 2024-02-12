import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wizzard-finished',
  templateUrl: './wizzard-finished.component.html',
  styleUrl: './wizzard-finished.component.scss'
})
export class WizzardFinishedComponent {

  constructor(@Inject(Router) private router: Router) { }


  ngOnInit() {
  }

  goWelcome(){
    this.router.navigate(['welcome']);
  }

}
