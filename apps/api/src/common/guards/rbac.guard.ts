import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { REQUIRED_PERMISSION_KEY } from "../decorators/require-permission.decorator";
import { hasPermission } from "../utils/rbac";

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermission = this.reflector.get<string>(
      REQUIRED_PERMISSION_KEY,
      context.getHandler(),
    );
    if (!requiredPermission) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!hasPermission(user.role, requiredPermission)) {
      throw new ForbiddenException();
    }

    return true;
  }
}
