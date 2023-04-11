import api from "@service/axios";
import type {
  TopRatedMoviesResponse,
  GenreMoviesResponse,
  RevenueMoviesResponse,
  PopularMoviesResponse,
} from "@service/types";


const API_KEY = process.env.SECRET as string


const fetchTopRatedMovies = async (): Promise<TopRatedMoviesResponse> => {
  const { data } = await api.get<TopRatedMoviesResponse>(
    `/movie/top_rated`,
    {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        page: 1,
      },
    }
  );
  return data;
};

const fetchGenreMovies = async (
  genreId: number,
  page = 1
): Promise<GenreMoviesResponse> => {
  const { data } = await api.get<GenreMoviesResponse>("/discover/movie", {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
      sort_by: "popularity.desc",
      with_genres: genreId,
      page,
    },
  });
  return data;
};

const fetchRevenueMovies = async (
  sortBy: "revenue.desc" | "revenue.asc",
  page = 1
): Promise<RevenueMoviesResponse> => {
  const { data } = await api.get<RevenueMoviesResponse>("/discover/movie", {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
      sort_by: sortBy,
      page,
    },
  });
  return data;
};

const fetchPopularMovies = async (page = 1): Promise<PopularMoviesResponse> => {
  const { data } = await api.get<PopularMoviesResponse>("/movie/popular", {
    params: {
      api_key: API_KEY,
      language: "pt-BR",
      page,
    },
  });
  return data;
};

export {
  fetchTopRatedMovies,
  fetchGenreMovies,
  fetchPopularMovies,
  fetchRevenueMovies
};
