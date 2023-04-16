import { NextResponse } from "next/server";
import { fetchImageMovies } from "@service/http/tmdb";
export async function GET(
  req: Request,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  const movieid = Number(params.id);
  const res = await fetchImageMovies(movieid);
  return NextResponse.json({ ...res });
}
