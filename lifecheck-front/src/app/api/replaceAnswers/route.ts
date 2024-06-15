import { NextRequest, NextResponse } from "next/server";
import { getUserAnswers, replaceAnswerWithQID } from "@/src/data/questions";

//const db = drizzle(pool, { schema: { question } });

export async function GET() {
  const answers = await getUserAnswers();
  return NextResponse.json({ answers });
}

interface AnswerRequest {
  aText: string;
  questionId: number;
  createdBy: string;
  userID: string;
}

export async function POST(req: NextRequest) {
  const payload: AnswerRequest = await req.json();

  // Extrae los datos del cuerpo de la solicitud
  const { aText, questionId, createdBy, userID } = payload;

  // Llama a la función addQuestion para insertar los datos
  try {
    const answer = await replaceAnswerWithQID(
      aText,
      questionId,
      createdBy,
      userID,
    );
  } catch (error) {
    console.log("POST Answer", error);
    return NextResponse.json(
      { error: "No se pudo insertar la Respuesta" },
      { status: 500 },
    );
  }
  return NextResponse.json({});
}
