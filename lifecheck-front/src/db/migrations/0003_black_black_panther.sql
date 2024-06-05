ALTER TABLE "users" ALTER COLUMN "u_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "register_date" SET DATA TYPE timestamp (6) with time zone;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "register_date" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "register_date" SET NOT NULL;