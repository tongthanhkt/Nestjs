import { ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
export class LocalGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('Call at local.guard.ts => canActivate ');
    const result = (await super.canActivate(context)) as boolean;
    await super.logIn(context.switchToHttp().getRequest());
    return result;
  }
}
