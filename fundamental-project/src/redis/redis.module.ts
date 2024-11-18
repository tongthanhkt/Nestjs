// redis.module.ts
import { Module } from '@nestjs/common';
import * as Redis from 'redis';
import { REDIS } from './redis.constants';

@Module({
  providers: [
    {
      provide: REDIS,
      useFactory: async () => {
        const client = Redis.createClient({
          url: 'redis://localhost:6379', // Replace with the correct Redis URL
        });

        client.on('error', (err) => {
          console.error('Redis Client Error:', err);
        });

        await client.connect();
        return client;
      },
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
