import { NextRequest, NextResponse } from "next/server";
import { scoresList } from "../../../../TestData.json";
import { revalidatePath } from "next/cache";

const scoresData: number[] = [...scoresList];

function gettingRanks(number: number) {
  scoresData.push(number);
  const sorted = scoresData.sort((a, b) => a - b);
  const rank = ((sorted.indexOf(number) / scoresData.length) * 100).toFixed(2);
  return rank;
}

export async function POST(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
  const newScore = await req.json();
  const rank = gettingRanks(newScore);
  return NextResponse.json(rank);
}
