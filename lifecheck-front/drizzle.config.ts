import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();


export default {
  schema: "./src/db/schema/",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_CONECTION_STRING,
  }
} satisfies Config;