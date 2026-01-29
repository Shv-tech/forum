import { Client } from "pg";

const ROLES = [
  { name: "observer", description: "Read-only access" },
  { name: "contributor", description: "Can submit drafts" },
  { name: "reviewer", description: "Can write reviews" },
  { name: "institution_admin", description: "Manages institutional presence" },
  { name: "steward", description: "Platform governance authority" },
];

async function main() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();

  for (const role of ROLES) {
    await client.query(
      `
      INSERT INTO roles (name, description)
      VALUES ($1, $2)
      ON CONFLICT (name) DO NOTHING
      `,
      [role.name, role.description],
    );
  }

  await client.end();
  console.log("✔ Roles seeded safely");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
