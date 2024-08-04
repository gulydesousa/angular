import { Component, signal } from "@angular/core";
import { DecimalPipe } from '@angular/common';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = "A" | "B" | "C" | "D" | "F";
type Frameworks = "Angular" | "React" | "Vue"|"Svelte"| "Ember";

@Component({
  standalone: true,
  imports: [DecimalPipe, TitleComponent],
  templateUrl: "./control-flow.component.html",
  styles: ``,
})

export class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');

   //Signal que contiene todos los frameworks en un array de tipo Frameworks
  public frameworks = signal<Frameworks[]>(['Angular', 'React', 'Vue', 'Svelte', 'Ember']);
  public frameworks2024 = signal<Frameworks[]>([]);


  public toggleContent() {
    this.showContent .update((value) => !value);

    //Asignar un grade aleatorio usando el type Grade
    const grades: Grade[] = ['A', 'B', 'C', 'D', 'F'];
    const randomGrade = grades[Math.floor(Math.random() * grades.length)];
    this.grade.set(randomGrade);
  }
}
