import { pgTable, serial, integer, text, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { users } from './users'; // Ensure this import points to where the users schema is defined
import { user_evaluation_closed_question_answer } from './user_evaluation_closed_question_answer'; // Ensure this import points to the correct location
import { user_evaluation_answer } from './user_evaluation_answer'; // Ensure this import points to the correct location

export const user_evaluation_category_analysis = pgTable('user_evaluation_category_analysis', {
    user_evaluation_category_analysis_id: serial('user_evaluation_category_analysis_id').primaryKey(),
    user_id: integer('user_id').notNull().references(() => users.user_id),
    user_evaluation_closed_question_answer_id: integer('user_evaluation_closed_question_answer_id').notNull().references(() => user_evaluation_closed_question_answer.user_evaluation_closed_question_answer_id),
    user_evaluation_answer_id: integer('user_evaluation_answer_id').notNull().references(() => user_evaluation_answer.user_evaluation_answer_id),
    feedback_description: text('feedback_description').notNull(),
    grade: integer('grade').notNull(),
    health_grade: integer('health_grade').notNull(),
    education_grade: integer('education_grade').notNull(),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});