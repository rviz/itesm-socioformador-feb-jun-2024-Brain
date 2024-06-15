import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { pool, db } from "./db"; // Ensure this path matches where your db.ts file is located

console.log("Starting migration...");

// This will run migrations on the database, skipping the ones already applied
(async () => {
  try {
    await migrate(db, { migrationsFolder: "./src/db/migrations" });
    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await pool.end();
    console.log("Database connection closed");
  }
})();
