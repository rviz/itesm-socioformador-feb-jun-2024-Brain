import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../db/db";
import { question } from "../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(pool, { schema: { question } });

export async function getEducationQuestions() {
  const questions = await db.query.question.findMany({
    where: eq(question.categoryId, 1),
  });
  return questions;
}

export async function addQuestion(qText: string, qType: boolean, categoryId: number, createdBy: string) {
    return question;
}