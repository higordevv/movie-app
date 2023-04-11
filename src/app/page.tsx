"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "react-query";
import { fetchTopRatedMovies } from "@service/http/get";
import { TopRatedMoviesResponse } from "@/service/types";

export default function Home() {
  const { data } = useQuery<TopRatedMoviesResponse>(
    ["toprated", 1],
    fetchTopRatedMovies
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
