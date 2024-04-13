# Task Manager: <br>  *Prácticas de Angular v17* 


> [!NOTE]
> Este proyecto forma parte del curso de Udemy: Complete Angular 11 - Ultimate Guide - with Real World App, y es un recurso excelente para comprender mejor el desarrollo de aplicaciones con Angular.

> - [x] [Complete Angular 11 - Ultimate Guide - with Real World App](https://neoris.udemy.com/course/complete-angular-indepth-easy)


## Instalación
Estos son los pasos para ejecutar `Netcore Contact Manager` en tu máquina local para propósitos de desarrollo y pruebas.

Asegúrate de tener lo siguiente instalado en tu máquina de desarrollo:

- .NET Core 8
- SQL Server

## Web API: *MvcTaskManager*

Este proyecto conecta con una Web Api implementada con **NetCore 7**

- Directorio de la solucion: **MvcTaskManager**

- Para ejecutar la solución necesitas tener una base de datos de SQL Server llamada **TaskManager** 

- En el fichero **launchSettings.json** está configurado el puerto de ejecución de la API: 
 *http://localhost:7004* 

- Para poder hacer uso del protocolo **https** necesitarás un certificado.

- En **Project.cs** está la ruta de conexión a la base de datos.

- En **Program.cs** está configurado el CORS para permitir conexiones desde localhost

## Aplicación Web: *TaskManager*

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
