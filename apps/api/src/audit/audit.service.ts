import { Injectable } from "@nestjs/common";
import { AuditEvent } from "./audit.entity";

@Injectable()
export class AuditService {
  async record(event: AuditEvent): Promise<void> {
    // In production: append-only database / event store
    // This service NEVER mutates existing records
    console.log("AUDIT:", event);
  }
}
