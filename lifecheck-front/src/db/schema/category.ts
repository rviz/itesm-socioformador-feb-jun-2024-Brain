import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql

export const category = pgTable("category", {
  categoryId: serial("category_id").primaryKey(),
  catName: varchar("cat_name", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").default(sql`current_timestamp`),
  createdBy: varchar("created_by"),
});
