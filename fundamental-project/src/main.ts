import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap'); // Create a Logger instance for the Bootstrap context
  await app.listen(3000);
  logger.log(`Application listening at ${await app.getUrl()}`);
}

bootstrap();
