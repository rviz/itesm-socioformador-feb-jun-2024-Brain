import { pgTable, serial, varchar, integer, timestamp, foreignKey } from 'drizzle-orm/pg-core';
import { sql } from "drizzle-orm"; // Correct import for sql
import { company } from './company'; // Assuming the company schema is defined in another file or the same file above

export const users = pgTable('users', {
    user_id: serial('user_id').primaryKey(),
    u_name: varchar('u_name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    register_date: timestamp('register_date').default(sql`current_timestamp`),
    last_evaluation_date: timestamp('last_evaluation_date'),
    company_id: integer('company_id').references(() => company.company_id),
    created_at: timestamp('created_at').default(sql`current_timestamp`),
    created_by: varchar('created_by')
});

