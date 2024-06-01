import { eq } from 'drizzle-orm';
import { pool } from '@/src/db/db';
import { question } from '@/src/db/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import { drizzle } from 'drizzle-orm/node-postgres';
import { NextRequest, NextResponse } from 'next/server';
import { get } from 'http';
import { addAnswerWithQID  } from '@/src/data/questions';
import { getAnalysis } from '@/src/data/questions';

//const db = drizzle(pool, { schema: { question } });

const userId = '1' // HARDCODED FOR TESTING

export async function GET() {
  const analysis = await getAnalysis({ params: { userId: userId } });
  return NextResponse.json({ analysis });
}




// interface AnalysisRequest {
//   userId: string,
//   userEvaluationClosedQuestionAnswerId: number,
//   userEvaluationAnswerId: number,
//   feedbackDescription: string,
//   grade: number,
//   healthGrade: number,
//   educationGrade: number,
//   createdBy: string
// }




// export async function POST(req: NextRequest) {
//   const payload: AnalysisRequest = await req.json();
  
//     // Extrae los datos del cuerpo de la solicitud
//     const { userId,userEvaluationClosedQuestionAnswerId,userEvaluationAnswerId, feedbackDescription, grade, healthGrade, educationGrade, createdBy} = payload;

//     // Llama a la función addQuestion para insertar los datos
//     try {
//       const question = await addQuestionTest(userId,userEvaluationClosedQuestionAnswerId,userEvaluationAnswerId, feedbackDescription, grade, healthGrade, educationGrade, createdBy
//       );}
//       catch (error) {
//         return NextResponse.json({error: "No se pudo insertar la pregunta"}, {status: 500});
//       }
//   return NextResponse.json({});
// }
