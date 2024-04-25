import type { Config } from "drizzle-kit";
export default {
  schema: "./src/db/schema/",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PROFILE,
  },
} satisfies Config;