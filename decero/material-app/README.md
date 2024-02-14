# MaterialApp
## _Angular de cero a experto: (Angular 17+)_
> Reactive Forms: `Angular Material 17.1.2`
> Servidor: `json-server@0.17.4`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Requisitos

Instalar json-server@0.17.4

```sh
npm install --save-dev json-server@0.17.4
```
>El comando que se necesita para ejecutar json-server es
>`npx json-server data/db.json`
>Lo hemos dejado configurado en `package.json` 


# material-app: Development server
1. Clonar el proyecto

2. Instalar en local

```sh
npm install
```

3. Levantar el backend: servicio de heroes en local

```sh
npm run backend
```

4. Ejecutar la app 

```sh
sh ng serve -o
```
***

### El `package.json` está configurado  también para iniciar el proyecto en una sola instruccion
Para ello necesitas:

1. Tener instalado este paquete `npm install --save-dev concurrently`

2. Configurar el `package.json` con la siguiente entrada


>>>`"start": "concurrently \"json-server --watch data/db.json\" \"ng serve -o\"",`


3. Con esta configuración solo hace falta  un comando para arrancar el servicio y la aplicación:

```sh
npm start
```

<br>
<br>
<br>

****
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
***



