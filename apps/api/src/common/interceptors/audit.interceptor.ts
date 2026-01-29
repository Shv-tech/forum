import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { AuditService } from "../../audit/audit.service";
import { generateId } from "../utils/ids";

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(private readonly auditService: AuditService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(async () => {
        if (!req.user) return;

        await this.auditService.record({
          id: generateId(),
          actorId: req.user.id,
          action: req.method,
          targetType: "http",
          targetId: req.originalUrl,
          metadata: {},
          occurredAt: new Date(),
        });
      }),
    );
  }
}
