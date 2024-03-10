import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Project } from '../classes/project.class';
import {environment} from  '../../environments/environments'
//Configurar tu cliente HTTP para permitir certificados autofirmados
import {HttpBackend } from '@angular/common/http';

@Injectable({
  //available for injection in any component
  providedIn: 'root'
})

/**
 * Service for managing projects.
 */
export class ProjectsService {
  private http: HttpClient;//Configurar tu cliente HTTP para permitir certificados autofirmados
  private api_url: string = environment.apiUrl + '/projects';

  constructor(private httpclient: HttpClient, handler: HttpBackend){
    //Configurar tu cliente HTTP para permitir certificados autofirmados
    this.http = new HttpClient(handler);
  }

  /**
   * Retrieves all projects from the server.
   * @returns An Observable that emits an array of Project objects.
   * @throws An error if there is an issue retrieving the projects.
   */
  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.api_url).pipe(
      catchError(this.handleError)
      );
  }

  /**
   * Inserts a new project into the server.
   * @param project The project object to be inserted.
   * @returns An Observable that emits the inserted Project object.
   * @throws An error if there is an issue inserting the project.
   */
  insertProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.api_url, project).pipe(
      catchError(this.handleError)
      );
  }


  /**
   * Updates an existing project on the server.
   * @param project The project object to be updated.
   * @returns An Observable that emits the updated Project object.
   * @throws An error if there is an issue updating the project.
   */
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.api_url}/${project.ID}`, project).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Deletes a project from the server.
   * @param project The project object to be deleted.
   * @returns An Observable that emits the deleted Project object.
   * @throws An error if there is an issue deleting the project.
   */
  deleteProject(project: Project): Observable<Project> {
    return this.http.delete<Project>(`${this.api_url}/${project.ID}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
