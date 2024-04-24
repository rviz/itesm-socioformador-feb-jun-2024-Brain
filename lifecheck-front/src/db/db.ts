import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

export const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // `multipleStatements` is not a standard option in `node-postgres`.
  // If you need to execute multiple statements at once, consider running them as separate queries or using a transaction.
});

export const db = drizzle(pool, { schema });