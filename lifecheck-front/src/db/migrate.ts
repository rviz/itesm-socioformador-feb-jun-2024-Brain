import 'dotenv/config';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { pool, db } from './db'; // Ensure this path matches where your db.ts file is located

// This will run migrations on the database, skipping the ones already applied
(async () => {
  await migrate(db, { migrationsFolder: './src/db/migrations' });
  // Don't forget to close the pool, otherwise the script will hang
  await pool.end();
})();