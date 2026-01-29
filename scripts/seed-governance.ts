import { Client } from "pg";

async function main() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  await client.query(
    `
    INSERT INTO governance_policies (key, value)
    VALUES
      ('content_deletion', 'prohibited'),
      ('review_anonymity', 'disabled'),
      ('ai_authority', 'informational_only')
    ON CONFLICT (key) DO NOTHING
    `,
  );

  await client.end();
  console.log("✔ Governance baseline seeded");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
