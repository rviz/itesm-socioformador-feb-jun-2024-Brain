import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../db/db";
import { answer, question } from "../db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(pool, { schema: { question } });
const dba = drizzle(pool, { schema: { answer } });

export async function getEducationQuestions() {
  const questions = await db.query.question.findMany({
    where: eq(question.categoryId, 4),
  });
  return questions;
}

export async function getEducationAnswers() {
  const answers = await dba.query.answer.findMany({
    //where: eq(answer.answerId, 1),
  });
  return answers;
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

export async function replaceAnswerWithQID(aText: string, questionId: number, createdBy: string) {
  // Intenta actualizar primero
  const updateResult = await db.update(answer)
    .set({
      aText: aText,
      createdBy: createdBy
    })
    .where(eq(answer.questionId, questionId))
    .returning();

  // Comprueba si se actualizó alguna fila
  if (updateResult.length === 0) {
    // Si no se actualizó ninguna fila, inserta una nueva respuesta
    const insertResult = await db.insert(answer).values({
      aText: aText,
      questionId: questionId,
      createdBy: createdBy
    }).returning();
    return insertResult;
  }

  // Devuelve el resultado de la actualización si se actualizó una fila
  return updateResult;
}