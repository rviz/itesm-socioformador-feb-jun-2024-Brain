import { pgTable, serial, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { evaluation } from './evaluation'; // Ensure this import points to where the evaluation schema is defined
import { question } from './question'; // Ensure this import points to where the question schema is defined

export const evaluation_question = pgTable('evaluation_question', {
    evaluation_question_id: serial('evaluation_question_id').primaryKey(),
    evaluation_id: integer('evaluation_id').notNull().references(() => evaluation.evaluation_id),
    question_id: integer('question_id').notNull().references(() => question.question_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
