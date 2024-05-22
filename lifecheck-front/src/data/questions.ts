import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../db/db";
import { answer, question, user_evaluation_category_analysis } from "../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(pool, { schema: { question } });
const dba = drizzle(pool, { schema: { answer } });
const dbanalyis = drizzle(pool, { schema: { user_evaluation_category_analysis } });


export async function getEducationQuestions() {
  const questions = await db.query.question.findMany({
    where: eq(question.categoryId, 4),
  });
  return questions;
}

export async function getEducationAnswers() {
  const answers = await dba.query.answer.findMany({
    where: eq(answer.answerId, 1),
  });
  return answers;
}


export async function getAnalysis({ params }: { params: { userId: string } }) {
  const analysis = await dbanalyis.query.user_evaluation_category_analysis.findMany({
    where: eq(user_evaluation_category_analysis.userId, params.userId),
  });
  return analysis;
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

export async function addAnswerWithQID(aText: string, questionId: number, createdBy: string) {
  // Utiliza Drizzle para insertar una nueva pregunta
  const result = await dba.insert(answer).values({
    aText: aText,
    questionId: questionId,
    createdBy: createdBy
  }).returning();
  return result;
}