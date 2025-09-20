import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  devDatasourceOptions,
  prodDatasourceOptions,
} from './Datasource/datasource';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { APP_PIPE } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PlacesModule } from './places/places.module';
import { CategoriesModule } from './categories/categories.module';
import { CitiesModule } from './cities/cities.module';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { CommentsModule } from './comments/comments.module';
import { UsersFavoritesModule } from './users-favorites/users-favorites.module';
import { SubcategoriesModule } from './subcategories/subcategories.module';
const cookieSession = require('cookie-session');
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    TypeOrmModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
   TypeOrmModule.forRoot(
  process.env.NODE_ENV === 'production'
    ? prodDatasourceOptions
    : devDatasourceOptions
),
    UsersModule,
    PlacesModule,
    CategoriesModule,
    CitiesModule,
    NeighborhoodsModule,
    CommentsModule,
    UsersFavoritesModule,
    SubcategoriesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  constructor(private configService: ConfigService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: [this.configService.get('COOKIE_KEY')],
        }),
      )
      .forRoutes('*');
  }
}
