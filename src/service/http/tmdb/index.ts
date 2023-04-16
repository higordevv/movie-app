import api from "@service/axios";
import type * as T from "@/service/http/tmdb/types";

async function fetchPopularMovies() {
  const { data } = await api.get<T.PopularMoviesResponse>("/movie/popular");
  return data.results;
}

async function fetchGenreMovieList() {
  const { data } = await api.get<T.Genre[]>("/genre/movie/list?");
  return data;
}

async function fetchImageMovies(id: number) {
  const { data } = await api.get<T.MovieImageResponse>(
    `/movie/${id}/images?language=en_US`
  );
  return data;
}

async function fetchTheMovieDbBasicConfig(): Promise<{
  configuration: T.TmdbConfigResponse;
  countries: T.TmdbCountryResponse[];
  jobs: T.TmdbJobResponse[];
  languages: T.TmdbLanguageResponse[];
  primary_translations: T.TmdbPrimaryTranslationResponse[];
  timezones: T.TmdbTimezoneResponse[];
}> {
  const endpointers = [
    "/configuration",
    "/configuration/countries",
    "/configuration/jobs",
    "/configuration/languages",
    "/configuration/primary_translations",
    "/configuration/timezones",
  ];

  const requests = endpointers.map((url) => api.get(url));

  const [
    configuration,
    countries,
    jobs,
    languages,
    primary_translations,
    timezones,
  ]: any = await Promise.all(requests)
    .then((responses) =>
      responses.map((response) => {
        return response.data;
      })
    )
    .catch((error) => {
      console.error(error);
    });

  return {
    configuration,
    countries,
    jobs,
    languages,
    primary_translations,
    timezones,
  };
}
export {
  fetchPopularMovies,
  fetchGenreMovieList,
  fetchImageMovies,
  fetchTheMovieDbBasicConfig,
};
