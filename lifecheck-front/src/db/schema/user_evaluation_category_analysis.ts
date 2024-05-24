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
    feedbackHealth: text('feedback_health').notNull(),
    feedbackEducation: text('feedback_education').notNull(),
    feedbackHousing: text('feedback_housing').notNull(),
    feedbackLifeSatisfaction: text('feedback_life_satisfaction').notNull(),
    feedbackEnvironment: text('feedback_environment').notNull(),
    feedbackIncome: text('feedback_income').notNull(),
    feedbackSecurity: text('feedback_security').notNull(),
    feedbackWorkLifeBalance: text('feedback_work_life_balance').notNull(),
    grade: integer('grade').notNull(),
    gradeHealth: integer('grade_health').notNull(),
    gradeEducation: integer('grade_education').notNull(),
    gradeHousing: integer('grade_housing').notNull(),
    gradeLifeSatisfaction: integer('grade_life_satisfaction').notNull(),
    gradeEnvironment: integer('grade_environment').notNull(),
    gradeIncome: integer('grade_income').notNull(),
    gradeSecurity: integer('grade_security').notNull(),
    gradeWorkLifeBalance: integer('grade_work_life_balance').notNull(),
    healthGrade: integer('health_grade').notNull(),
    educationGrade: integer('education_grade').notNull(),
    createdAt: timestamp('created_at').default(sql`current_timestamp`),
    createdBy: varchar('created_by')
});