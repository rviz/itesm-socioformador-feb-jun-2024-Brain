import { pgTable, serial, text, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { question } from './question'; // Ensure this import points to where the question schema is defined

export const question_option = pgTable('question_option', {
    questionOptionId: serial('question_option_id').primaryKey(),
    qopText: text('qop_text').notNull(), // 'text' type used for the text of the response option
    questionId: integer('question_id').references(() => question.questionId),
    createdAt: timestamp('created_at').default(sql`current_timestamp`),
    createdBy: varchar('created_by')
});
