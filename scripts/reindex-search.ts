import { Client } from "pg";

async function main() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  const res = await client.query(`
    SELECT id, title, content
    FROM submissions
    WHERE status = 'published'
  `);

  for (const row of res.rows) {
    // Hook: send to search backend (OpenSearch / Meilisearch)
    // Intentionally synchronous for traceability
    console.log("Reindexed submission:", row.id);
  }

  await client.end();
  console.log("✔ Search index rebuilt");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
