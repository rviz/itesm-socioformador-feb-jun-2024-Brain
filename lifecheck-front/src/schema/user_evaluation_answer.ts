import { pgTable, serial, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { evaluation_user } from './evaluation_user'; // Ensure this import points to where the evaluation_user schema is defined
import { question } from './question'; // Ensure this import points to where the question schema is defined
import { answer } from './answer'; // Ensure this import points to where the answer schema is defined

export const user_evaluation_answer = pgTable('user_evaluation_answer', {
    user_evaluation_answer_id: serial('user_evaluation_answer_id').primaryKey(),
    evaluation_user_id: integer('evaluation_user_id').notNull().references(() => evaluation_user.evaluation_user_id),
    question_id: integer('question_id').notNull().references(() => question.question_id),
    answer_id: integer('answer_id').notNull().references(() => answer.answer_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
