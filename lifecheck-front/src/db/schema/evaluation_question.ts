import {
	pgTable,
	serial,
	integer,
	timestamp,
	varchar,
	foreignKey,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql
import { evaluation } from "./evaluation"; // Ensure this import points to where the evaluation schema is defined
import { question } from "./question"; // Ensure this import points to where the question schema is defined

export const evaluation_question = pgTable("evaluation_question", {
	evaluationQuestionId: serial("evaluation_question_id").primaryKey(),
	evaluationId: integer("evaluation_id")
		.notNull()
		.references(() => evaluation.evaluationId),
	questionId: integer("question_id")
		.notNull()
		.references(() => question.questionId),
	createdAt: timestamp("created_at").default(sql`current_timestamp`),
	createdBy: varchar("created_by"),
});
