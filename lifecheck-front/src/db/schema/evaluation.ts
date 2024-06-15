import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql

export const evaluation = pgTable("evaluation", {
	evaluationId: serial("evaluation_id").notNull().primaryKey(),
	eName: varchar("e_name", { length: 255 }).notNull(),
	description: varchar("description"),
	createdAt: timestamp("created_at").default(sql`current_timestamp`),
	createdBy: varchar("created_by"),
});
