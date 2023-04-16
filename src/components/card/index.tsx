import { Movie } from "@service/http/tmdb/types";
import Image from "next/image";
import React from "react";

type Props = Pick<Movie, "backdrop_path" | "title" | "release_date">;

function Card(props: Props) {
  return (
    <div
      className="w-[300px] relative object-fill bg-cover bg-no-repeat max-w-lg h-auto text-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${props.backdrop_path})` }}
    >
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="m-auto">
        <h1 className="text-white text-4xl font-bold mb-4">{props.title}</h1>
        <h2>{props.release_date}</h2>
      </div>
    </div>
  );
}

export default Card;
