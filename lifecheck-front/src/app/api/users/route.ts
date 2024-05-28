import { eq } from 'drizzle-orm';
import { pool } from '@/src/db/db';
import { answer, question } from '@/src/db/schema';
import { NextApiRequest, NextApiResponse } from 'next';
import { drizzle } from 'drizzle-orm/node-postgres';
import { NextRequest, NextResponse } from 'next/server';
import { get } from 'http';
//import { getUserID  } from '@/src/data/questions';

//const db = drizzle(pool, { schema: { question } });



/*export async function GET(req: NextApiRequest) {
  const users = await getUserID();
  return NextResponse.json({ users });
}*/