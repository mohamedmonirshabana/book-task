import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Book-Task API')
  .setDescription('Test for Rest API ')
  .setVersion("1.0.0")
  .addBearerAuth(
    {type:'http', scheme:'bearer', bearerFormat:'Token'},
    'access-token'
    )
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);
  await app.listen(3000);
}
bootstrap();
