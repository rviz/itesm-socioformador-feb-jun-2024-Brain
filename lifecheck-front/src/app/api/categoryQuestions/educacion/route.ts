import { NextResponse } from 'next/server';
import { getEvaluationQuestions } from '@/src/data/questions';



export async function GET() {
  const questions = await getEvaluationQuestions(4);
  return NextResponse.json({ questions });
}


// AGREGAR PREGUNTAS - NO BORRAR EL COMENATIO GIGANTE DE ABAJO
/*
interface QuestionsRequest {
  qText: string;
  qType: boolean;
  categoryId: number;
  createdBy: string;
}

export async function POST(req: NextRequest) {
  const payload: QuestionsRequest = await req.json();
  
    // Extrae los datos del cuerpo de la solicitud
    const { qText, qType, categoryId, createdBy } = payload;

    // Llama a la función addQuestion para insertar los datos
    try {
      const question = await addQuestionTest(qText, qType, categoryId, createdBy);}
      catch (error) {
        return NextResponse.json({error: "No se pudo insertar la pregunta"}, {status: 500});
      }
  return NextResponse.json({});
}*/