import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql

export const evaluation = pgTable('evaluation', {
    evaluation_id: serial('evaluation_id').primaryKey(),
    e_name: varchar('e_name', { length: 255 }).notNull(),
    description: varchar('description'),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
