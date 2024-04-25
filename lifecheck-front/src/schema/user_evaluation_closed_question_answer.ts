import { pgTable, serial, integer, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { users } from './users'; // Ensure this import points to where the users schema is defined
import { question } from './question'; // Ensure this import points to where the question schema is defined
import { question_option } from './question_option'; // Ensure this import points to where the question_option schema is defined

export const user_evaluation_closed_question_answer = pgTable('user_evaluation_closed_question_answer', {
    user_evaluation_closed_question_answer_id: serial('user_evaluation_closed_question_answer_id').primaryKey(),
    user_id: integer('user_id').notNull().references(() => users.user_id),
    question_id: integer('question_id').notNull().references(() => question.question_id),
    question_option_id: integer('question_option_id').notNull().references(() => question_option.question_option_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
