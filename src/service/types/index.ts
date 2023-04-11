interface Genre {
    id: number;
    name: string
  }
  
  interface Movie {
    release_date: any;
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    vote_count: number;
    revenue: number;
    genres: Genre[];
  }
  
  interface PopularMoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }
  
  interface TopRatedMoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }
  
  interface GenreMoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }
  
  interface RevenueMoviesResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }
  
  export type {
    Genre,
    Movie,
    PopularMoviesResponse,
    TopRatedMoviesResponse,
    GenreMoviesResponse,
    RevenueMoviesResponse,
  };
  