import { eq } from 'drizzle-orm';
import { pool } from '@/src/db/db';
import { question } from '@/src/db/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import { drizzle } from 'drizzle-orm/node-postgres';
import { NextRequest, NextResponse } from 'next/server';
import { get } from 'http';
import { getEducationQuestions } from '@/src/data/questions';

const db = drizzle(pool, { schema: { question } });



export async function GET(req: NextApiRequest) {
  const questions = await getEducationQuestions();
  return NextResponse.json({ questions });
}

export async function POST(req: NextRequest) {
  const payload = await req.json();
  return NextResponse.json({});
}

