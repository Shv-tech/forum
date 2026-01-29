import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from "typeorm";
import { AuditLogEntity } from "../entities/audit-log.entity";

@EventSubscriber()
export class AuditSubscriber
  implements EntitySubscriberInterface<AuditLogEntity>
{
  listenTo() {
    return AuditLogEntity;
  }

  beforeInsert(_: InsertEvent<AuditLogEntity>) {
    // Hard invariant: no mutation hooks allowed
  }
}
