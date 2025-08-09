import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthService } from './auth.service';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
// import { GoogleStrategy } from '../users/strategies/google.strategy';
// import { FacebookStrategy } from '../users/strategies/facebook.strategy';
// import { TwitterStrategy } from './strategies/twitter.startegy';
import { PlacesModule } from '../places/places.module';
import { Place } from '../places/entities/place.entity';
import { UsersFavorites } from '../users-favorites/users_favorites.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Place, UsersFavorites]),
    JwtModule.register({
      secret: process.env.JWTSecret,
      signOptions: { expiresIn: '10 s' },
    }),
    PlacesModule,
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    // AuthService,
    // GoogleStrategy,
    // FacebookStrategy,
    // TwitterStrategy,
  ],
  exports: [UsersService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('*');
  }
}
