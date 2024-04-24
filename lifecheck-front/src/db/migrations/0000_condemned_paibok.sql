CREATE TABLE IF NOT EXISTS "answer" (
	"answer_id" serial PRIMARY KEY NOT NULL,
	"a_text" text NOT NULL,
	"question_id" integer,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "category" (
	"category_id" serial PRIMARY KEY NOT NULL,
	"cat_name" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar,
	CONSTRAINT "category_cat_name_unique" UNIQUE("cat_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "company" (
	"company_id" serial PRIMARY KEY NOT NULL,
	"c_name" text NOT NULL,
	"description" text NOT NULL,
	"sector" text NOT NULL,
	"evaluation_timer" integer,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "evaluation" (
	"evaluation_id" serial PRIMARY KEY NOT NULL,
	"e_name" varchar(255) NOT NULL,
	"description" varchar,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "evaluation_question" (
	"evaluation_question_id" serial PRIMARY KEY NOT NULL,
	"evaluation_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "evaluation_user" (
	"evaluation_user_id" serial PRIMARY KEY NOT NULL,
	"start_date" timestamp NOT NULL,
	"user_id" integer NOT NULL,
	"evaluation_id" integer NOT NULL,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question" (
	"question_id" serial PRIMARY KEY NOT NULL,
	"q_text" varchar NOT NULL,
	"q_type" boolean NOT NULL,
	"category_id" integer,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "question_option" (
	"question_option_id" serial PRIMARY KEY NOT NULL,
	"qop_text" text NOT NULL,
	"question_id" integer,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_evaluation_answer" (
	"user_evaluation_answer_id" serial PRIMARY KEY NOT NULL,
	"evaluation_user_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"answer_id" integer NOT NULL,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_evaluation_category_analysis" (
	"user_evaluation_category_analysis_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"user_evaluation_closed_question_answer_id" integer NOT NULL,
	"user_evaluation_answer_id" integer NOT NULL,
	"feedback_description" text NOT NULL,
	"grade" integer NOT NULL,
	"health_grade" integer NOT NULL,
	"education_grade" integer NOT NULL,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_evaluation_closed_question_answer" (
	"user_evaluation_closed_question_answer_id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"question_option_id" integer NOT NULL,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"u_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"register_date" timestamp DEFAULT current_timestamp,
	"last_evaluation_date" timestamp,
	"company_id" integer,
	"created_at" timestamp DEFAULT current_timestamp,
	"created_by" varchar,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answer" ADD CONSTRAINT "answer_question_id_question_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "question"("question_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "evaluation_question" ADD CONSTRAINT "evaluation_question_evaluation_id_evaluation_evaluation_id_fk" FOREIGN KEY ("evaluation_id") REFERENCES "evaluation"("evaluation_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "evaluation_question" ADD CONSTRAINT "evaluation_question_question_id_question_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "question"("question_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "evaluation_user" ADD CONSTRAINT "evaluation_user_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "evaluation_user" ADD CONSTRAINT "evaluation_user_evaluation_id_evaluation_evaluation_id_fk" FOREIGN KEY ("evaluation_id") REFERENCES "evaluation"("evaluation_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question" ADD CONSTRAINT "question_category_id_category_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "question_option" ADD CONSTRAINT "question_option_question_id_question_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "question"("question_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_answer" ADD CONSTRAINT "user_evaluation_answer_evaluation_user_id_evaluation_user_evaluation_user_id_fk" FOREIGN KEY ("evaluation_user_id") REFERENCES "evaluation_user"("evaluation_user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_answer" ADD CONSTRAINT "user_evaluation_answer_question_id_question_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "question"("question_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_answer" ADD CONSTRAINT "user_evaluation_answer_answer_id_answer_answer_id_fk" FOREIGN KEY ("answer_id") REFERENCES "answer"("answer_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_category_analysis" ADD CONSTRAINT "user_evaluation_category_analysis_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_category_analysis" ADD CONSTRAINT "user_evaluation_category_analysis_user_evaluation_closed_question_answer_id_user_evaluation_closed_question_answer_user_evaluation_closed_question_answer_id_fk" FOREIGN KEY ("user_evaluation_closed_question_answer_id") REFERENCES "user_evaluation_closed_question_answer"("user_evaluation_closed_question_answer_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_category_analysis" ADD CONSTRAINT "user_evaluation_category_analysis_user_evaluation_answer_id_user_evaluation_answer_user_evaluation_answer_id_fk" FOREIGN KEY ("user_evaluation_answer_id") REFERENCES "user_evaluation_answer"("user_evaluation_answer_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_closed_question_answer" ADD CONSTRAINT "user_evaluation_closed_question_answer_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_closed_question_answer" ADD CONSTRAINT "user_evaluation_closed_question_answer_question_id_question_question_id_fk" FOREIGN KEY ("question_id") REFERENCES "question"("question_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_evaluation_closed_question_answer" ADD CONSTRAINT "user_evaluation_closed_question_answer_question_option_id_question_option_question_option_id_fk" FOREIGN KEY ("question_option_id") REFERENCES "question_option"("question_option_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_company_id_company_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "company"("company_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
