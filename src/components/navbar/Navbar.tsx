"use client";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), {
  loading: () => <Skeleton width={8} height={12} baseColor="#ccc" />,
  ssr: false,
});

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { House, VideoCamera, List } from "phosphor-react";
import Skeleton from "react-loading-skeleton";

const Navbar = () => {
  const activeSegment = useSelectedLayoutSegment();

  const links = [
    { label: "Home", icon: <House />, path: "/", targetSegment: null },
    {
      label: "Movies",
      path: "/movies",
      icon: <VideoCamera />,
      targetSegment: "movies",
    },
    {
      label: "Series",
      path: "/series",
      icon: <List />,
      targetSegment: "series",
    },
  ];
  return (
    <nav className="w-full flex justify-center flex-col-reverse md:flex-row md:justify-stretch m-5 gap-6">
      <div className="w-auto flex mx-50 md:m-0">
        {links.map((l) => (
          <Link
            className={`${
              activeSegment === l.targetSegment
                ? "text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                : "text-white opacity-50"
            } md:py-2 md:px-4 md:mx-5 p-1 mx-auto`}
            key={l.targetSegment?.toString()}
            href={l.path}
          >
            <p className="flex items-center  gap-2 text-sm md:text-base">
              {l.icon}
              {l.label}
            </p>
          </Link>
        ))}
      </div>
        <Image
          src="/Icon.svg"
          alt="icon"
          width={100}
          height={100}
          className="mx-auto md:mx-48"
        />
    </nav>
  );
};

export default Navbar;
