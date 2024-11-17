import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DB_HOST = 'localhost';
  getHost() {
    return this.DB_HOST;
  }
}
