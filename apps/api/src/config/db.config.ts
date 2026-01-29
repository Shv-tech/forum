import { requireEnv, optionalEnv } from "./env";

export const DatabaseConfig = {
  url: requireEnv("DATABASE_URL"),

  ssl: optionalEnv("NODE_ENV") === "production",

  pool: {
    min: 2,
    max: 20,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  },

  migrations: {
    runOnStartup: false,
    tableName: "schema_migrations",
  },

  safety: {
    synchronize: false, // NEVER true in production
    dropSchema: false,
  },
};
