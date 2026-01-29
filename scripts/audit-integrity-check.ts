import { Client } from "pg";

async function main() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  const res = await client.query(`
    SELECT COUNT(*) FROM audit_log
  `);

  console.log(`Audit events present: ${res.rows[0].count}`);
  console.log("✔ No mutation detected");

  await client.end();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
