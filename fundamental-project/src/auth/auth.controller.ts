import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';

import { LocalGuard } from '../local.guard';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './models/register-user.dto';
import { LoginUserDto } from './models/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() user: RegisterUserDto) {
    return this.authService.registerUser(user);
  }

  @UseGuards(LocalGuard)
  @Post('login')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loginUser(@Req() req, @Body() user: LoginUserDto) {
    return req.session;
  }
}
