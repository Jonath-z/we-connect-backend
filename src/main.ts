import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('v1');
  await app.listen(3300, () => {
    console.log(`API is running on PORT ${process.env.PORT}`);
  });
}
bootstrap();
