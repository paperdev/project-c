import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableCors();
  const port = configService.get('SERVER_PORT') || 7777;
  await app.listen(port);
  console.log('Server started on port : ' + port);
}
bootstrap();
