import { pgTable, serial, varchar, boolean, integer, timestamp, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { category } from './category'; // Ensure this import points to where the category schema is defined

export const question = pgTable('question', {
    question_id: serial('question_id').primaryKey(),
    q_text: varchar('q_text').notNull(), // Not specifying length allows for maximum default length
    q_type: boolean('q_type').notNull(), // True for open-ended questions, False for closed-ended
    category_id: integer('category_id').references(() => category.category_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});
