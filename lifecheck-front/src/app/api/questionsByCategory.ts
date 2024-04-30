import { eq } from 'drizzle-orm';
import { db } from '@/src/db/db';
import { question } from '@/src/db/schema';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const questions = await db.select({
      q_text: question.qText,
    })
    .from(question)
    .where(eq(question.categoryId, 1));

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch questions." });
  }
}