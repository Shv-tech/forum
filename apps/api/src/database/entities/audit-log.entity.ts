import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("audit_log")
export class AuditLogEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  actorId!: string;

  @Column()
  action!: string;

  @Column()
  targetType!: string;

  @Column()
  targetId!: string;

  @Column("jsonb")
  metadata!: Record<string, any>;

  @CreateDateColumn()
  occurredAt!: Date;
}
