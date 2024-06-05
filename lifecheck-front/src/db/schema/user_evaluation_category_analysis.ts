import { pgTable, serial, integer, text, timestamp, varchar, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { users } from './users'; // Ensure this import points to where the users schema is defined
import { user_evaluation_closed_question_answer } from './user_evaluation_closed_question_answer'; // Ensure this import points to the correct location
import { user_evaluation_answer } from './user_evaluation_answer'; // Ensure this import points to the correct location

export const user_evaluation_category_analysis = pgTable('user_evaluation_category_analysis', {
    userEvaluationCategoryAnalysisId: serial('user_evaluation_category_analysis_id').primaryKey(),
    userId: varchar('user_id', { length: 255 }).notNull().references(() => users.userId),
    userEvaluationClosedQuestionAnswerId: integer('user_evaluation_closed_question_answer_id').references(() => user_evaluation_closed_question_answer.userEvaluationClosedQuestionAnswerId),
    userEvaluationAnswerId: integer('user_evaluation_answer_id').notNull().references(() => user_evaluation_answer.userEvaluationAnswerId),
    feedbackDescription: text('feedback_description'),
    feedbackHealth: text('feedback_health'),
    feedbackEducation: text('feedback_education'),
    feedbackHousing: text('feedback_housing'),
    feedbackLifeSatisfaction: text('feedback_life_satisfaction'),
    feedbackEnvironment: text('feedback_environment'),
    feedbackIncome: text('feedback_income'),
    feedbackSecurity: text('feedback_security'),
    feedbackWorkLifeBalance: text('feedback_work_life_balance'),
    grade: integer('grade'),
    gradeHealth: integer('grade_health'),
    gradeEducation: integer('grade_education'),
    gradeHousing: integer('grade_housing'),
    gradeLifeSatisfaction: integer('grade_life_satisfaction'),
    gradeEnvironment: integer('grade_environment'),
    gradeIncome: integer('grade_income'),
    gradeSecurity: integer('grade_security'),
    gradeWorkLifeBalance: integer('grade_work_life_balance'),
    createdAt: timestamp('created_at').default(sql`current_timestamp`),
    createdBy: varchar('created_by')
});