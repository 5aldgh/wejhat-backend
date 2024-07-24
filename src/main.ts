import { config } from 'dotenv';
config()
import { NestFactory } from '@nestjs/core';
const helmet = require('helmet');
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.enableCors();
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    `RUNNING API IN MODE: ${process.env.NODE_ENV} on port: ${PORT}`
  });
}
bootstrap();
