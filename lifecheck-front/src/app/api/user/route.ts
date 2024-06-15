import { NextResponse } from "next/server";
import { getMyUser } from "@/src/data/questions";

export async function GET() {
  const user = await getMyUser();
  return NextResponse.json({ user });
}
