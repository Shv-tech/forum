import { MigrationInterface, QueryRunner } from "typeorm";

export class InitAuditLog1700000000000 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE audit_log (
        id UUID PRIMARY KEY,
        actor_id TEXT NOT NULL,
        action TEXT NOT NULL,
        target_type TEXT NOT NULL,
        target_id TEXT NOT NULL,
        metadata JSONB NOT NULL,
        occurred_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `);
  }

  async down(): Promise<void> {
    throw new Error("Audit log is append-only");
  }
}
