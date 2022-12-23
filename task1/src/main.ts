import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


// INITIATING THE SWAGGER DOCUMENT  (LINE: 9 TO 19)
  // DocumentBuilder CONFIGURATION TO STRUCTURE A BASE DOCUMENT
  const config = new DocumentBuilder()
  .setTitle("TASK 1")
  .setDescription("This is the test of swagger API")
  .setVersion('1.0')
  .build();
  //FULL DOCUMENT WITH HTTP ROUTES DEFINED
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup("api", app, document);


  // ENABLING CORS
  app.enableCors();

  // BACKEND PORT DECLARATION 
  await app.listen(8001);
}
bootstrap();
