import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './notes/common/exception/http-exception.filter';
import { logger } from './notes/common/middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('User API description')
    .setVersion('1.0')
    .addTag('users')
    .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  
  //app.use(logger);
  //app.useGlobalFilters(new HttpExceptionFilter()); global scoped exception filter
  await app.listen(3000);
}
bootstrap();
