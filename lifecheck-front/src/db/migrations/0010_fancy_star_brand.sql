ALTER TABLE "user_evaluation_category_analysis" ALTER COLUMN "feedback_description" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "user_evaluation_category_analysis" ALTER COLUMN "grade" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "u_name" varchar(255);