import { fetchPopularMovies } from "@/service/http/tmdb";
import { NextResponse } from "next/server";

export function GET(
  req: Request,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  const NumberForParam = Number(params.id);
  return NextResponse.json({ param: NumberForParam });
}
