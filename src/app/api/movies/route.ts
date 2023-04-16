import {
  fetchTheMovieDbBasicConfig,
  fetchPopularMovies,
  fetchGenreMovieList,
} from "@service/http/tmdb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { configuration } = await fetchTheMovieDbBasicConfig();
  const { base_url, backdrop_sizes } = configuration.images;

  const Movies = await fetchPopularMovies();
  const Genres = await fetchGenreMovieList();

  try {
    const formattedMovies = Movies.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        backdrop_url: `${base_url}${backdrop_sizes[2]}${movie.backdrop_path}`,
        genrer: movie.genres,
      };
    });

    return NextResponse.json(formattedMovies);
  } catch (e) {
    console.error(e);
  }
}
