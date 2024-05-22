-- Add user_id column if it does not exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_name='user_evaluation_answer' AND column_name='user_id'
  ) THEN
    ALTER TABLE "user_evaluation_answer" ADD COLUMN "user_id" varchar DEFAULT '1' NOT NULL;
  END IF;
END$$;

-- Update user_id values to '1' where they are NULL
UPDATE "user_evaluation_answer"
SET "user_id" = '1'
WHERE "user_id" IS NULL;

-- Set user_id column to NOT NULL (if not already set by the previous step)
DO $$ 
BEGIN
  BEGIN
    ALTER TABLE "user_evaluation_answer" ALTER COLUMN "user_id" SET NOT NULL;
  EXCEPTION
    WHEN duplicate_column THEN null;
  END;
END$$;

-- Add foreign key constraint if it does not exist
DO $$ 
BEGIN
  BEGIN
    ALTER TABLE "user_evaluation_answer" ADD CONSTRAINT "user_evaluation_answer_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE no action ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END;
END $$;

