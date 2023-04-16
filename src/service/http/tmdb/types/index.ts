interface Genre {
  id: number;
  name: string;
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

interface AbstractResponse {
  page: number;
  total_results: number;
  total_pages: number;
}

interface PopularMoviesResponse extends AbstractResponse {
  results: Movie[];
}

interface TopRatedMoviesResponse extends AbstractResponse {
  results: Movie[];
}

interface GenreMoviesResponse {
  genres: Genre[];
}

interface RevenueMoviesResponse {
  results: Movie[];
}

// Images
interface Backdrops {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface Posters extends Backdrops {}

interface MovieImageResponse {
  id: number;
  backdrops: Backdrops[];
  posters: Posters[];
}

enum backdrop_sizes {
  "w300",
  "w780",
  "w1280",
  "original",
}

enum logo_sizes {
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original",
}

enum poster_sizes {
  "w45",
  "w92",
  "w154",
  "w185",
  "w300",
  "w500",
  "original",
}

enum profile_sizes {
  "w45",
  "w185",
  "h632",
  "original",
}

enum still_sizes {
  "w92",
  "w185",
  "w300",
  "original",
}

enum change_keys {
  "adult",
  "air_date",
  "also_known_as",
  "alternative_titles",
  "biography",
  "birthday",
  "budget",
  "cast",
  "certifications",
  "character_names",
  "created_by",
  "crew",
  "deathday",
  "episode",
  "episode_number",
  "episode_run_time",
  "freebase_id",
  "freebase_mid",
  "general",
  "genres",
  "guest_stars",
  "homepage",
  "images",
  "imdb_id",
  "languages",
  "name",
  "network",
  "origin_country",
  "original_name",
  "original_title",
  "overview",
  "parts",
  "place_of_birth",
  "plot_keywords",
  "production_code",
  "production_companies",
  "production_countries",
  "releases",
  "revenue",
  "runtime",
  "season",
  "season_number",
  "season_regular",
  "spoken_languages",
  "status",
  "tagline",
  "title",
  "translations",
  "tvdb_id",
  "tvrage_id",
  "type",
  "video",
  "videos",
}
interface Images {
  images: {
    base_url: "http://image.tmdb.org/t/p/";
    secure_base_url: "https://image.tmdb.org/t/p/";
    backdrop_sizes: backdrop_sizes[];
    logo_sizer: logo_sizes[];
    poster_sizes: poster_sizes[];
    profile_sizes: profile_sizes[];
    still_sizes: still_sizes[];
  };
  change_keys: change_keys[];
}

interface TmdbConfig {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}

interface TmdbCountry {
  iso_3166_1: string;
  english_name: string;
}

interface TmdbJob {
  department: string;
  jobs: string[];
}

interface TmdbLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface TmdbPrimaryTranslation {
  iso_639_1: string;
  name: string;
}

interface TmdbTimezone {
  iso_3166_1: string;
  zones: string[];
}

interface TmdbConfigResponse extends TmdbConfig {}
interface TmdbCountryResponse extends TmdbCountry {}
interface TmdbJobResponse extends TmdbJob {}
interface TmdbLanguageResponse extends TmdbLanguage {}
interface TmdbPrimaryTranslationResponse extends TmdbPrimaryTranslation {}
interface TmdbTimezoneResponse extends TmdbTimezone {}

export type {
  Genre,
  Movie,
  Images,
  PopularMoviesResponse,
  TopRatedMoviesResponse,
  GenreMoviesResponse,
  RevenueMoviesResponse,
  MovieImageResponse,
  TmdbConfigResponse,
  TmdbConfig,
  TmdbCountry,
  TmdbCountryResponse,
  TmdbJobResponse,
  TmdbLanguageResponse,
  TmdbPrimaryTranslationResponse,
  TmdbTimezoneResponse,
};
