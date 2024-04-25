import { pgTable, serial, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { users } from './users'; // Ensure this import points to where the users schema is defined
import { evaluation } from './evaluation'; // Ensure this import points to where the evaluation schema is defined

export const evaluation_user = pgTable('evaluation_user', {
    evaluation_user_id: serial('evaluation_user_id').primaryKey(),
    start_date: timestamp('start_date').notNull(), // Date when the user starts the evaluation
    user_id: integer('user_id').notNull().references(() => users.user_id),
    evaluation_id: integer('evaluation_id').notNull().references(() => evaluation.evaluation_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
