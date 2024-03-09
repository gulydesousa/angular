import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../classes/project.class';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent implements OnInit {

  @ViewChild('myModalClose', { static: false }) modalClose!: ElementRef;

  projects: Project[] = [];
  newProject: Project = new Project();

  constructor(private projectService: ProjectsService) {


  }

  ngOnInit() {
    this.projectService.getAllProjects()
      .subscribe({
        // 1. Handle data
        next: (projects) => { this.projects = projects; },
        // 2. Handle error
        error: (err) => { console.error(err); },
        // 3. Handle completion
        complete: () => { console.log('Completed'); }
      });
  }

  addProjectClick() {
    this.projectService.insertProject(this.newProject)
      .subscribe({
        next: (project) =>
        {
          this.projects.push(this.newProject);
          this.newProject = new Project();
        },
        error: (err) => { console.error(err); },
        complete: () => {
          console.log('Completed');
          this.modalClose.nativeElement.click();
        }
      });






  }
}
