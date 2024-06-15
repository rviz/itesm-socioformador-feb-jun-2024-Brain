import {
  pgTable,
  serial,
  varchar,
  boolean,
  integer,
  timestamp,
  foreignKey,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql
import { category } from "./category"; // Ensure this import points to where the category schema is defined

export const question = pgTable("question", {
  questionId: serial("question_id").primaryKey(),
  qText: varchar("q_text").notNull(), // Not specifying length allows for maximum default length
  qType: boolean("q_type").notNull(), // True for open-ended questions, False for closed-ended
  qDescription: varchar("q_description"),
  categoryId: integer("category_id").references(() => category.categoryId),
  createdAt: timestamp("created_at").default(sql`current_timestamp`),
  createdBy: varchar("created_by"),
});
