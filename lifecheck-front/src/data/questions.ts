import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "../db/db";
import { answer, question, user_evaluation_category_analysis, users } from "../db/schema";
import { eq } from "drizzle-orm";
import {getSession} from '@auth0/nextjs-auth0'
import { and } from "drizzle-orm";

const db = drizzle(pool, { schema: { question } });
const dba = drizzle(pool, { schema: { answer } });
const dbanalyis = drizzle(pool, { schema: { user_evaluation_category_analysis } });


export async function getMyUser() {
  const data = await getSession();
  return data.user;
}

export async function getEvaluationQuestions(categoryID: number) {
  const questions = await db.query.question.findMany({
    where: eq(question.categoryId, categoryID),
  });
  return questions;
}
export async function getUserAnswers() {
  const data = await getSession();
  const answers = await dba.query.answer.findMany({
    where : eq(answer.userId, data.user.sub)
  });
  return answers;
}


export async function getAnalysis() {
  const data = await getSession();
  const analysis = await dbanalyis.query.user_evaluation_category_analysis.findMany({
    where: eq(user_evaluation_category_analysis.userId, data.user.sub),
  });
  return analysis;
}




/*export async function addQuestion(qText: string, qType: boolean, categoryId: number, createdBy: string) {
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
}*/

export async function addAnswerWithQID(aText: string, questionId: number, createdBy: string) {
  // Utiliza Drizzle para insertar una nueva pregunta
  const result = await dba.insert(answer).values({
    userId: '', // Add the missing userId property
    aText: aText,
    questionId: questionId,
    createdBy: createdBy,
  }).returning();
  return result;
}

export async function replaceAnswerWithQID(aText: string, questionId: number, createdBy: string, userID: string) {
  // Intenta actualizar primero
  const data = await getSession();
  const updateResult = await db.update(answer)
    .set({
      aText: aText,
      createdBy: createdBy,
      userId: userID,
    })
    // Usa `and` para requerir que ambas condiciones se cumplan
    .where(and(eq(answer.userId, data.user.sub), eq(answer.questionId, questionId)))
    .returning();

  // Comprueba si se actualizó alguna fila
  if (updateResult.length === 0) {
    // Si no se actualizó ninguna fila, inserta una nueva respuesta
    const insertResult = await db.insert(answer).values({
      userId: userID, // Asegura que el userId se incluya correctamente
      aText: aText,
      questionId: questionId,
      createdBy: createdBy,
    }).returning();
    return insertResult;
  }

  // Devuelve el resultado de la actualización si se actualizó una fila
  return updateResult;
}

