# 26AuthApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.2.


Este proyecto hace uso de una base de datos en **Mongo DB** y un servicio REST implementado con **Nest**


# 🚠 Arrancar el proyecto en localhost
***

## Iniciar el servicio

### 1. Docker Desktop 🐳

Tenemos una base datos que se llama `25-nest`

1. Abrir el Docker Desktop y asegurarnos que está en ejecución.
![alt text](image.png)

2. Ejecutar el comando de arranque:C:\Gdesousa\angular\decero\25-nest-backend


```bash
#Levantamos el contenedor
docker compose up -d
```


```bash
#Si quisieramos detener el contenedor tenemos este comando
docker compose down
```
Verás que la base de datos está ahora en un directorio mongo

![alt text](image-1.png)


##### docker-compose.yml
```yml
#docker-compose.yml

version: '3'

services:
  db:
    container_name: meand-db
    image: mongo:5.0.16
    volumes:
      - ./mongo/data:/data/db
    ports:
      - "27017:27017"
    restart: always  
```
### 2. Arrancamos el servicio Nest 🐣

```bash
npm run start:dev
```
Este comando viene de la configuración del package.json
#### C:\Gdesousa\angular\decero\25-nest-backend\package.json

```JSON
{
  "name": "25-nest-backend",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
```


### 3. Probamos el servicio con postman 🚀

Hacemos una petición de prueba, por ejemplo: **Registrar un usuario**

![alt text](image-2.png)

👍 El backend está funcionando


***

## Iniciar la web 

```bash
ng serve -o
``` 

### 1. Variables de entorno

En el fichero `26-auth-app\src\environments\environment.ts` tenemos las variables de entorno.

*Nota que es la misma ruta del servicio*
```ts
/* src\environments\environment.ts */
export const environment = {
  baseUrl: "http://localhost:3000",
};
```

### 2. Arrancamos el proyecto web

```bash
 ng serve -o
```
<br>
<br>

<br>

#  🚁 Aprovisionamiento de la bbdd MongoDB

Con tu cuenta de `https://www.mongodb.com/`

Otra opción es `https://railway.app/`


Creamos nuestra cuenta y una nueva base de datos en **RAILWAY** que nos proporciona un nuevo string de conexion
. Cambiaremos entonces el string de conexion por el nuevo que apunta al servidor railway

```bash
#Local MogoDB
#MONGO_URI=mongodb://localhost:27017/mean-db
#Remote MongoDB
MONGO_URI=mongodb://mongo:BwXTUyuHXVNNZlASXNufyofEcXeHLjcG@viaduct.proxy.rlwy.net:25267

#JWT: json web token seed
JWT_SEED=3y6B9z$wQ841rT14kP8zw7mN2vX5aJ0eF6g
```
<br>
<br>

# 🛫 Aprovisionamiento del servicio

1. Comprobamos que se pueden ejecutar los comandos de compilacion

```bash
npm run build
npm run start
```

2. Creamos un nuevo proyecto en **RAILWAY**
3. Conectamos al reposito del servicio `https://github.com/gulydesousa/25-nest-backend`
4. Una vez compilado podemo recuperar la url del servicio publico `https://25-nest-backend-production.up.railway.app` 
