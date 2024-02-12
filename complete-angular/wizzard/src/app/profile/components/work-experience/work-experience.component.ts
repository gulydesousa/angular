import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input()
  stepper!: MatStepper;

  constructor(@Inject(Router) private router: Router) { }


  ngOnInit() {
  }

  goWizzardFinished() {
    this.router.navigate(['/profile/wizzard-finished']);
  }
}
