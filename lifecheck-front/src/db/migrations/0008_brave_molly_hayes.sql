ALTER TABLE "user_evaluation_category_analysis" RENAME COLUMN "health_grade" TO "feedback_health";--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" RENAME COLUMN "education_grade" TO "feedback_education";--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ALTER COLUMN "feedback_health" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ALTER COLUMN "feedback_health" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ALTER COLUMN "feedback_education" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ALTER COLUMN "feedback_education" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "answer" ADD COLUMN "user_id" varchar(255);--> statement-breakpoint
ALTER TABLE "question" ADD COLUMN "q_description" varchar;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "feedback_housing" text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "feedback_life_satisfaction" text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "feedback_environment" text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "feedback_income" text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "feedback_security" text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "feedback_work_life_balance" text;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_health" integer;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_education" integer;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_housing" integer;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_life_satisfaction" integer;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_environment" integer;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_income" integer;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_security" integer;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ADD COLUMN "grade_work_life_balance" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answer" ADD CONSTRAINT "answer_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
