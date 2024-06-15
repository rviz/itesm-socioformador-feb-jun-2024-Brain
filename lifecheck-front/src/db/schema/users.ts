import {
	pgTable,
	serial,
	varchar,
	integer,
	timestamp,
	foreignKey,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql
import { company } from "./company"; // Assuming the company schema is defined in another file or the same file above

export const users = pgTable("users", {
	userId: varchar("user_id", { length: 255 }).primaryKey().notNull(),
	uName: varchar("u_name", { length: 255 }),
	personalName: varchar("personal_name", { length: 255 }),
	email: varchar("email", { length: 255 }).notNull().unique(),
	registerDate: timestamp("register_date", {
		precision: 6,
		withTimezone: true,
	}).notNull(),
	lastEvaluationDate: timestamp("last_evaluation_date"),
	companyId: integer("company_id").references(() => company.companyId),
	createdAt: timestamp("created_at").default(sql`current_timestamp`),
	createdBy: varchar("created_by"),
});
