import { NextResponse } from "next/server";
import { wordList } from "../../../../TestData.json";
export async function GET(req: Request) {
  const questions = wordList
    .sort(() => Math.random() - Math.random())
    .slice(0, 10);
  const options = [...new Set(wordList.map((word) => word.pos))];
  return NextResponse.json({ questions, options });
}
