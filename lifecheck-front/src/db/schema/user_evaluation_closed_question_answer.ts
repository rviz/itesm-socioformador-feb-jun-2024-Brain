import {
  pgTable,
  serial,
  integer,
  timestamp,
  varchar,
  foreignKey,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql
import { users } from "./users"; // Ensure this import points to where the users schema is defined
import { question } from "./question"; // Ensure this import points to where the question schema is defined
import { question_option } from "./question_option"; // Ensure this import points to where the question_option schema is defined

export const user_evaluation_closed_question_answer = pgTable(
  "user_evaluation_closed_question_answer",
  {
    userEvaluationClosedQuestionAnswerId: serial(
      "user_evaluation_closed_question_answer_id",
    ).primaryKey(),
    userId: varchar("user_id", { length: 255 })
      .notNull()
      .references(() => users.userId),
    questionId: integer("question_id")
      .notNull()
      .references(() => question.questionId),
    questionOptionId: integer("question_option_id")
      .notNull()
      .references(() => question_option.questionOptionId),
    createdAt: timestamp("created_at").default(sql`current_timestamp`),
    createdBy: varchar("created_by"),
  },
);
