ALTER TABLE "users" ALTER COLUMN "user_id" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "u_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "register_date" SET DATA TYPE timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "register_date" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "register_date" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "evaluation_user" ALTER COLUMN "user_id" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ALTER COLUMN "user_id" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "user_evaluation_closed_question_answer" ALTER COLUMN "user_id" SET DATA TYPE varchar(255);
