import { serial, text, integer, timestamp, pgTable } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql

export const company = pgTable("company", {
    companyId: serial("company_id").primaryKey(),
    cName: text("c_name").notNull(),
    description: text("description").notNull(),
    sector: text("sector").notNull(),
    evaluationTimer: integer("evaluation_timer"),
    createdAt: timestamp("created_at").default(sql`current_timestamp`), // Corrected use of sql
    createdBy: text("created_by")
});
