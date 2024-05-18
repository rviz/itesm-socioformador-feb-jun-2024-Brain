import { pgTable, serial, integer, text, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { users } from './users'; // Ensure this import points to where the users schema is defined
import { user_evaluation_closed_question_answer } from './user_evaluation_closed_question_answer'; // Ensure this import points to the correct location
import { user_evaluation_answer } from './user_evaluation_answer'; // Ensure this import points to the correct location

export const user_evaluation_category_analysis = pgTable('user_evaluation_category_analysis', {
    userEvaluationCategoryAnalysisId: serial('user_evaluation_category_analysis_id').primaryKey(),
    userId: varchar('user_id', { length: 255 }).notNull().references(() => users.userId),
    userEvaluationClosedQuestionAnswerId: integer('user_evaluation_closed_question_answer_id').notNull().references(() => user_evaluation_closed_question_answer.userEvaluationClosedQuestionAnswerId),
    userEvaluationAnswerId: integer('user_evaluation_answer_id').notNull().references(() => user_evaluation_answer.userEvaluationAnswerId),
    feedbackDescription: text('feedback_description').notNull(),
    grade: integer('grade').notNull(),
    healthGrade: integer('health_grade').notNull(),
    educationGrade: integer('education_grade').notNull(),
    createdAt: timestamp('created_at').default(sql`current_timestamp`),
    createdBy: varchar('created_by')
});