import { fetchGenreMovieList } from "@service/http/tmdb";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetchGenreMovieList();

  return NextResponse.json({ ...res });
}
