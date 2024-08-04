import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-heavy-loaders-fast',
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full', cssClass]">
    <ng-content />
  </section>`,
  styles: ``
})

export class HeavyLoadersFastComponent {
  @Input({required:true}) cssClass!: string;

  constructor() {
    console.log('HeavyLoadersFastComponent created');
  }
}
