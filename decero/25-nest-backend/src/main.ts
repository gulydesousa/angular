import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); //Habilitar CORS para que el front pueda acceder a la API

  //Configuracion del global pipes
  //Se restringe el acceso a los campos que no esten definidos en el DTO
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
