import {
	pgTable,
	serial,
	integer,
	timestamp,
	varchar,
	foreignKey,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql
import { evaluation_user } from "./evaluation_user"; // Ensure this import points to where the evaluation_user schema is defined
import { question } from "./question"; // Ensure this import points to where the question schema is defined
import { answer } from "./answer"; // Ensure this import points to where the answer schema is defined
import { users } from "./users";

export const user_evaluation_answer = pgTable("user_evaluation_answer", {
	userEvaluationAnswerId: serial("user_evaluation_answer_id").primaryKey(),
	evaluationUserId: integer("evaluation_user_id")
		.notNull()
		.references(() => evaluation_user.evaluationUserId),
	questionId: integer("question_id")
		.notNull()
		.references(() => question.questionId),
	answerId: integer("answer_id")
		.notNull()
		.references(() => answer.answerId),
	createdAt: timestamp("created_at").default(sql`current_timestamp`),
	createdBy: varchar("created_by"),
	user_id: varchar("user_id")
		.default("1")
		.notNull()
		.references(() => users.userId),
});
