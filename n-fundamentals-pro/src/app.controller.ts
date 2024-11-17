import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DevConfigService } from './common/providers/DevConfigService';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private devConfigService: DevConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello() + this.devConfigService.DB_HOST;
  }
}
