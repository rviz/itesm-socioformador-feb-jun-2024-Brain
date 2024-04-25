import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema';

const { Pool } = require('pg');

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    // cambiar a true en produccion y descargar certificado
    rejectUnauthorized: false
    // ca:
  }
  // `multipleStatements` is not a standard option in `node-postgres`.
  // If you need to execute multiple statements at once, consider running them as separate queries or using a transaction.
});

pool.connect();
export const db = drizzle(pool, { schema });