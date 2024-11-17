import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('CONFIG') config: { port: string }) {
    console.log('Non service provider: ', config);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
