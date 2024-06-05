import { pgTable, serial, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { users } from './users'; // Ensure this import points to where the users schema is defined
import { evaluation } from './evaluation'; // Ensure this import points to where the evaluation schema is defined

export const evaluation_user = pgTable('evaluation_user', {
    evaluationUserId: serial('evaluation_user_id').notNull().primaryKey(),
    startDate: timestamp('start_date').notNull(), // Date when the user starts the evaluation
    userId: varchar('user_id', { length: 255 }).notNull().references(() => users.userId),
    evaluationId: integer('evaluation_id').notNull().references(() => evaluation.evaluationId),
    createdAt: timestamp('created_at').default(sql`current_timestamp`),
    createdBy: varchar('created_by')
});
