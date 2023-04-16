"use client";

import { Movie } from "@service/http/tmdb/types";
import { createContext } from "react";


const mockData: Movie = {
  id: 502356,
  title: "The Super Mario Bros. Movie",
  overview:
    "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
  release_date: "2023-04-05",
  vote_average: 7.5,
  backdrop_path:
    "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
  poster_path: "",
  vote_count: 0,
  revenue: 0,
  genres: [],
};

export const MovieContext = createContext({} as Movie);

export function MovieContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = mockData;
  return (
    <MovieContext.Provider value={{ ...data }}>{children}</MovieContext.Provider>
  );
}
