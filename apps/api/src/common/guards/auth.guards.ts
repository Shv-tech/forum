import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const session = req.cookies?.["__platform_session"];

    const user = await this.authService.validateSession(session);
    if (!user) throw new UnauthorizedException();

    req.user = user;
    return true;
  }
}
