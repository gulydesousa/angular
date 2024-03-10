import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../classes/project.class';
import { finalize } from 'rxjs/operators';
import { ObjectProperties } from '../../classes/object-properties.class';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent implements OnInit {


  @ViewChild('myModalClose', { static: false }) modalClose!: ElementRef;
  @ViewChild('myEditModalClose', { static: false }) editModalClose!: ElementRef;
  @ViewChild('myDeleteModalClose', { static: false }) deleteModalClose!: ElementRef;

  projects: Project[] = [];
  newProject: Project = new Project();

  editProject: Project = new Project();
  editIndex: number = -1;

  deleteProject: Project = new Project();
  deleteIndex: number = -1;

  searchBy:string  = 'Name';
  searchText:string = '';

  projectProperties: ObjectProperties = new ObjectProperties();

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getAllProjects()
      .subscribe({
        // 1. Handle data
        next: (projects) => { this.projects = projects; console.log(this.projects); },
        // 2. Handle error
        error: (err) => { console.error(err); },
        // 3. Handle completion
        complete: () => { console.log('Completed'); }
      });

      this.getProjectProperties();
  }


  /**
   * Retrieves all project properties from the server.
   */
  getProjectProperties(): void {
    this.projectService.getAllProperties()
    .subscribe({
      // 1. Handle data
      next: (props) => { console.log(props); this.projectProperties = props; },
      // 2. Handle error
      error: (err) => { console.error(err); },
      // 3. Handle completion
      complete: () => { console.log('Completed'); }
    });
   // Add a return statement
  }

  /**
   * Handles the click event when adding a new project.
   */
  addProjectClick() {
    this.projectService.insertProject(this.newProject)
      .subscribe({
        next: (project) => {
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
  editProjectClick(event: any, index: number) {
    //... is the spread operator,
    //which creates a new object with the same properties as the original object
    this.editProject = { ...this.projects[index] };
    this.editIndex = index;
    console.log(this.editProject);
  }

  /**
   * Handles the click event when the update button is clicked.
   * Updates the project using the project service and updates the project list.
   * If an error occurs, it logs the error to the console.
   * Finally, it closes the modal.
   */
  updateProjectClick() {

    this.projectService.updateProject(this.editProject)
    //finalize: Este es un operador que se puede utilizar en un observable.
    //Se llama cuando el observable se completa,
    //ya sea que emita un valor con éxito o que emita un error.
    //Es útil para realizar operaciones de limpieza que deben ocurrir
    //independientemente de si el observable fue exitoso o no.
    .pipe(finalize(() => {
      console.log('Completed');
      this.editIndex=-1;
      this.editProject = new Project();
     }))
    .subscribe({
      next: (response) => {
        //... is the spread operator,
        //which creates a new object with the same properties as the original object
        //No se recomienda usar el mismo objeto para actualizar la lista
        //porque si algo falla, la lista se actualiza con un objeto que no se actualizó en el servidor
        //y se pierde la consistencia de los datos
        var p: Project = { ...this.editProject };

        this.projects[this.editIndex] = p;

      },
      error: (err) => { console.error(err); },
      complete: () => {
        this.editModalClose.nativeElement.click();
      }
    });
  }

  /**
   * Handles the click event when the delete button is clicked.
   * @param event The click event.
   * @param index The index of the project in the projects array.
   */
  deleteProjectClick(event: any, index: number) {
    //... is the spread operator,
    //which creates a new object with the same properties as the original object
    this.deleteIndex = index;
    this.deleteProject = { ...this.projects[index] };

    console.log(this.deleteProject);
  }


  /**
   * Handles the click event when the delete button is clicked.
   * Deletes the project using the project service and updates the project list.
   * If an error occurs, it logs the error to the console.
   * Finally, it closes the modal.
   */
  deleteProjectConfirmClick() {
    this.projectService.deleteProject(this.deleteProject)
    //finalize: Este es un operador que se puede utilizar en un observable.
    //Se llama cuando el observable se completa,
    //ya sea que emita un valor con éxito o que emita un error.
    //Es útil para realizar operaciones de limpieza que deben ocurrir
    //independientemente de si el observable fue exitoso o no.
     .pipe(finalize(() => {
      console.log('Completed');
      this.deleteIndex=-1;
      this.deleteProject = new Project();
     }))
    .subscribe({
      // 1. Handle data
      next: (response) => {
        this.projects.splice(this.deleteIndex, 1);
      },
      // 2. Handle error
      error: (err) => { console.error(err); },
      // 3. Handle completion:  No se llama si el observable emite un error.
      complete: () => {
        this.deleteModalClose.nativeElement.click();
      }
    });
  }

  /**
   * Handles the click event when the search button is clicked.
   * Retrieves the projects using the project service and updates the project list.
   * If an error occurs, it logs the error to the console.
   * Finally, it closes the modal.
   */
  onSearchClick() {
    this.projectService.searchProjects(this.searchBy, this.searchText)
    .subscribe({
      // 1. Handle data
      next: (projects) => { this.projects = projects; console.log(this.projects); },
      // 2. Handle error
      error: (err) => { console.error(err); },
      // 3. Handle completion
      complete: () => { console.log('Completed'); }
    });

  }

  onInputChange()
  {
    if(this.searchText.length==0)
    {
      this.projectService.getAllProjects()
      .subscribe({
        // 1. Handle data
        next: (projects) => { this.projects = projects; console.log(this.projects); },
        // 2. Handle error
        error: (err) => { console.error(err); },
        // 3. Handle completion
        complete: () => { console.log('Completed'); }
      });
    }
  }
}
