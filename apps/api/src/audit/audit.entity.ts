export class AuditEvent {
  id!: string;
  actorId!: string;
  action!: string;
  targetType!: string;
  targetId!: string;
  metadata!: Record<string, unknown>;
  occurredAt!: Date;
}
