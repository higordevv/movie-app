"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useQuery } from "react-query";
import { fetchPopularMovies } from "@service/http/tmdb";

import * as T from "@service/http/tmdb/types";
import { S } from "@components";
import { MovieContext } from "../contexts/HomeContext";
import { useContext } from "react";
import Link from "next/link";
import { Play } from "phosphor-react";

export default function Home() {
  const { id, title, backdrop_path } = useContext(MovieContext);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backdrop_path})`,
        }}
        className="absolute w-full top-0 left-0 h-[800px] bg-cover bg-center before:z-10"
      >
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(0deg,#020202 0,rgba(2,2,2,.96) 10%,rgba(2,2,2,.9) 22%,rgba(2,2,2,.66) 38%,rgba(2,2,2,.61) 58%,rgba(0,0,21,.76) 100%)",
          }}
        ></div>
      </div>
      <main className="block">
        <section className="relative h-[650px] block">
          <div className="relative block text-center my-0 mx-auto max-w-2xl pt-[200px]">
            <h1 className="text-5xl text-bold text-white">{title}</h1>
            <div className="block mt-5">
              <Link href={`/movies/${id}`}>
                <button className="w-50 py-3 px-6 bg-cyan-600 text-white rounded-full border flex items-center gap-4">
                  <Play width={25} />
                  Ver sobre o Filme
                </button>
              </Link>
            </div>
          </div>
        </section>
          <div className="block relative z-20 my-24">
            <div className="block relative w-full">
              <div className="h-auto  md:h-12 text-center">
                <span
                className="mt-4 flex flex-col gap-4 md:flex-row items-center"
                ><h1 className="text-white text-3xl font-semibold">Assistir Filmes Online</h1>
                  <div className="flex flex-row justify-center gap-4 items-center flex-wrap mx-auto">
                  <S.Button>Lançamentos</S.Button>
                  <S.Button>Novos Filmes</S.Button>
                  <S.Button>Populares</S.Button>
                  <S.Button>Mais assistidos</S.Button>
                  </div>
                </span>
                <span
                className="mt-4 flex flex-col gap-4 md:flex-row items-center"
                ><h1 className="text-white text-3xl font-semibold">Assistir Séries Online</h1>
                  <div className="flex flex-row justify-center gap-4 items-center flex-wrap mx-auto">
                  <S.Button>Novos Episódios</S.Button>
                  <S.Button>Novas Séries</S.Button>
                  <S.Button>Populares</S.Button>
                  <S.Button>Mais assistidas</S.Button>
                  </div>
                </span>
              </div>
            </div>
          </div>
     
      </main>
    </>
  );
}
