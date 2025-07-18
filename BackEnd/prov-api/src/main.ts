import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TrimPipe } from './common/pipes/trim.pipe.ts/trim.pipe.ts.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Habilitar CORS
  app.enableCors({
    origin: '*', // ⚠️ Cambia esto por tu dominio en producción, ej: 'http://localhost:4200'
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Pipe global
  app.useGlobalPipes(new TrimPipe());

  // swager
  const config = new DocumentBuilder()
    .setTitle('API DIAN')
    .setDescription('CRUD Departamentos y Municipios')
    .setVersion('1.0')
    .addBearerAuth() // Habilita el botón de JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
