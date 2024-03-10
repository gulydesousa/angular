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
  @ViewChild('myEditModalClose', { static: false }) editModalClose!: ElementRef;

  projects: Project[] = [];
  newProject: Project = new Project();

  editProject: Project = new Project();
  editIndex: number = -1;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projectService.getAllProjects()
      .subscribe({
        // 1. Handle data
        next: (projects) => { this.projects = projects;  console.log(this.projects);},
        // 2. Handle error
        error: (err) => { console.error(err); },
        // 3. Handle completion
        complete: () => { console.log('Completed'); }
      });
  }

  /**
   * Handles the click event when adding a new project.
   */
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

  /**
   * Handles the click event when the edit button is clicked.
   * @param event The click event.
   * @param index The index of the project in the projects array.
   */
  editProjectClick(event:any, index: number) {
    //... is the spread operator,
    //which creates a new object with the same properties as the original object
    this.editProject = { ...this.projects[index] };


    console.log(this.editProject);

    this.editIndex = index;
  }

  /**
   * Handles the click event when the update button is clicked.
   * Updates the project using the project service and updates the project list.
   * If an error occurs, it logs the error to the console.
   * Finally, it closes the modal.
   */
  updateProjectClick() {

    this.projectService.updateProject(this.editProject).subscribe({
      next: (response) =>
      {
        //... is the spread operator,
        //which creates a new object with the same properties as the original object
        //No se recomienda usar el mismo objeto para actualizar la lista
        //porque si algo falla, la lista se actualiza con un objeto que no se actualizó en el servidor
        //y se pierde la consistencia de los datos
        var p: Project = { ...this.editProject};

        this.projects[this.editIndex] = p;
        this.editProject = new Project();
        this.editIndex = -1;
      },
      error: (err) => { console.error(err); },
      complete: () => {
        console.log('Completed');
        this.editModalClose.nativeElement.click();
      }
    });
  }


  /**
   * Handles the click event when the delete button is clicked.
   * Deletes the project using the project service and updates the project list.
   * If an error occurs, it logs the error to the console.
   * @param event The click event.
   * @param index The index of the project in the projects array.
   */
  deleteProjectClick(event:any, index: number) {
    this.projectService.deleteProject(this.projects[index]).subscribe({
      next: (response) =>
      {
        this.projects.splice(index, 1);
      },
      error: (err) => { console.error(err); },
      complete: () => {
        console.log('Completed');
      }
    });
  }
}
