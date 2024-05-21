import { pgTable, serial, text, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { question } from './question'; // Ensure this import points to where the question schema is defined

export const answer = pgTable('answer', {
    answerId: serial('answer_id').primaryKey(),
    aText: text('a_text').notNull(), // 'text' type used for potentially long text entries
    questionId: integer('question_id').references(() => question.questionId),
    createdAt: timestamp('created_at').default(sql`current_timestamp`),
    createdBy: varchar('created_by')
});
