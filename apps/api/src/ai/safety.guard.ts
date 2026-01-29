import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class SafetyGuard implements CanActivate {
  canActivate(_: ExecutionContext): boolean {
    // Hook point for rate limits, abuse checks, audit
    return true;
  }
}
