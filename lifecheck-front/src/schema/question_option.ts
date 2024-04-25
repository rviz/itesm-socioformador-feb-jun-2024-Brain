import { pgTable, serial, text, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { question } from './question'; // Ensure this import points to where the question schema is defined

export const question_option = pgTable('question_option', {
    question_option_id: serial('question_option_id').primaryKey(),
    qop_text: text('qop_text').notNull(), // 'text' type used for the text of the response option
    question_id: integer('question_id').references(() => question.question_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
