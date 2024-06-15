import {
	serial,
	text,
	integer,
	timestamp,
	pgTable,
	varchar,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql

export const company = pgTable("company", {
	companyId: serial("company_id").primaryKey(),
	cName: varchar("c_name", { length: 256 }).notNull(), // Modified to have length 256
	description: text("description").notNull(),
	sector: text("sector").notNull(),
	evaluationTimer: integer("evaluation_timer"),
	createdAt: timestamp("created_at").default(sql`current_timestamp`),
	createdBy: text("created_by"),
});
