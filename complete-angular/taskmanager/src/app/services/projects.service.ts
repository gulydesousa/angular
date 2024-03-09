import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Project } from '../classes/project.class';
import {environment} from  '../../environments/environments'

@Injectable({
  //available for injection in any component
  providedIn: 'root'
})

export class ProjectsService {

  private api_url: string = environment.apiUrl + '/projects';

  constructor(private httpclient: HttpClient) { }

  /**
   * Retrieves all projects from the server.
   * @returns An Observable that emits an array of Project objects.
   * @throws An error if there is an issue retrieving the projects.
   */
  getAllProjects(): Observable<Project[]> {
    return this.httpclient.get<Project[]>(this.api_url).pipe(
      catchError((error: any, caught: Observable<Project[]>) => {
        console.error('Error:', error);
        return throwError(()=> new Error('Error getting projects'));
      })
    );
  }

  /**
   * Inserts a new project into the server.
   * @param project The project object to be inserted.
   * @returns An Observable that emits the inserted Project object.
   * @throws An error if there is an issue inserting the project.
   */
  insertProject(project: Project): Observable<Project> {
    return this.httpclient.post<Project>(this.api_url, project).pipe(
      catchError((error: any) => {
      console.error('Error:', error);
      return throwError(()=> new Error('Error inserting project'));
      })
    );
  }
}
