import { serial, text, integer, timestamp, pgTable } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm"; // Correct import for sql

export const company = pgTable("company", {
    company_id: serial("company_id").primaryKey(),
    c_name: text("c_name").notNull(),
    description: text("description").notNull(),
    sector: text("sector").notNull(),
    evaluation_timer: integer("evaluation_timer"),
    created_at: timestamp("created_at").default(sql`current_timestamp`), // Corrected use of sql
    created_by: text("created_by")
});
