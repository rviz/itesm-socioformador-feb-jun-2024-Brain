import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';
import * as schema from './schema/index';

export const client = new Client({
  host: process.env.DATABASE!,
  port: Number(process.env.DB_PORT!),
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_PROFILE!,
});

// { schema } is used for relational queries
export const db = drizzle(client, { schema });