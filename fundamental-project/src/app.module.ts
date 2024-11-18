import {
  Inject,
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';
import { RedisClientType } from 'redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';
import { REDIS } from './redis/redis.constants';
import RedisStore from 'connect-redis';

@Module({
  imports: [AuthModule, RedisModule],
  providers: [AppService, Logger],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  constructor(@Inject(REDIS) private readonly redis: RedisClientType) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new RedisStore({
            client: this.redis,
          }),
          saveUninitialized: false,
          secret: 'sup3rs3cr3t', // Replace with a secure secret in production
          resave: false,
          cookie: {
            sameSite: true,
            httpOnly: false, // Adjust as needed for your use case
            maxAge: 60000, // 1 minute
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
