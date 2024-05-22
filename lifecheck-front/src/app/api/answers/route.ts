import { eq } from 'drizzle-orm';
import { pool } from '@/src/db/db';
import { answer, question } from '@/src/db/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import { drizzle } from 'drizzle-orm/node-postgres';
import { NextRequest, NextResponse } from 'next/server';
import { get } from 'http';
import { getEducationQuestions, getEducationAnswers, addQuestionTest, addAnswerWithQID  } from '@/src/data/questions';

//const db = drizzle(pool, { schema: { question } });



export async function GET(req: NextApiRequest) {
  const answers = await getEducationAnswers();
  return NextResponse.json({ answers });
}

interface AnswerRequest {
    aText: string;
    questionId: number;
    createdBy: string;
}

export async function POST(req: NextRequest) {
  const payload: AnswerRequest = await req.json();
  
    // Extrae los datos del cuerpo de la solicitud
    const {aText, questionId, createdBy } = payload;

    // Llama a la función addQuestion para insertar los datos
    try {
      const answer = await addAnswerWithQID(aText, questionId, createdBy);}
      catch (error) {
        console.log("POST Answer", error);
        return NextResponse.json({error: "No se pudo insertar la Respuesta"}, {status: 500});
      }
  return NextResponse.json({});
}