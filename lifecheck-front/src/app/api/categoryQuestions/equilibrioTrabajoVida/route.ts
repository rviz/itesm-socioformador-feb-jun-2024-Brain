import { NextResponse } from 'next/server';
import { getEvaluationQuestions } from '@/src/data/questions';



export async function GET() {
  const questions = await getEvaluationQuestions(7);
  return NextResponse.json({ questions });
}