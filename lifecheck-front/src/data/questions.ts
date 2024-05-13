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

export async function addQuestionTest(qText: string, qType: boolean, categoryId: number, createdBy: string) {
  // Utiliza Drizzle para insertar una nueva pregunta
  const result = await db.insert(question).values({
    qText: qText,
    qType: qType,
    categoryId: categoryId
  }).returning();
  return result;
}