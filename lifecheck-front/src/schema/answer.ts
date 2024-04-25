import { pgTable, serial, text, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { question } from './question'; // Ensure this import points to where the question schema is defined

export const answer = pgTable('answer', {
    answer_id: serial('answer_id').primaryKey(),
    a_text: text('a_text').notNull(), // 'text' type used for potentially long text entries
    question_id: integer('question_id').references(() => question.question_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
