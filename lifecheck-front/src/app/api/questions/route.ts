import { eq } from 'drizzle-orm';
import { pool } from '@/src/db/db';
import { question } from '@/src/db/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import { drizzle } from 'drizzle-orm/node-postgres';
import { NextRequest, NextResponse } from 'next/server';
import { get } from 'http';
import { getEducationQuestions, addQuestionTest  } from '@/src/data/questions';

const db = drizzle(pool, { schema: { question } });



export async function GET(req: NextApiRequest) {
  const questions = await getEducationQuestions();
  return NextResponse.json({ questions });
}

export async function POST(req: NextRequest) {
  const payload = await req.json();
  return NextResponse.json({});
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extrae los datos del cuerpo de la solicitud
    const { qText, qType, categoryId, createdBy } = req.body;

    // Llama a la función addQuestion para insertar los datos
    try {
      const question = await addQuestionTest(qText, qType, categoryId, createdBy);
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ error: "No se pudo insertar la pregunta" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
