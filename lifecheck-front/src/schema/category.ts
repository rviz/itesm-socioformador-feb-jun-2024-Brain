import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql

export const category = pgTable('category', {
    category_id: serial('category_id').primaryKey(),
    cat_name: varchar('cat_name', { length: 255 }).notNull().unique(),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
