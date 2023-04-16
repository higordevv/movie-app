"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { House, VideoCamera, List } from "phosphor-react";

const Navbar = () => {
  const activeSegment = useSelectedLayoutSegment();
  const links = [
    { id: 1, label: "Home", icon: <House />, path: "/", targetSegment: null },
    {
      id: 2,
      label: "Movies",
      path: "/movies",
      icon: <VideoCamera />,
      targetSegment: "movies",
    },
    {
      id: 3,
      label: "Series",
      path: "/series",
      icon: <List />,
      targetSegment: "series",
    },
  ];

  return (
    <nav className="w-full flex justify-center flex-col-reverse md:flex-row md:justify-stretch m-5 gap-6">
      <div className="w-auto flex mx-50 md:m-0">
        {links.map((item) => (
          <Link key={item.id} href={item.path}>
            <div
              className={`${
                activeSegment === item.targetSegment
                  ? "text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  : "text-white opacity-50"
              } mx-5 px-4 py-2 md:py-2 md:px-4 md:mx-5  `}
            >
              <p className="flex items-center  gap-2 text-sm md:text-base">
                {item.icon}
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* <img src="/Icon.svg" alt="icon" className="mx-auto md:mx-48 h-8 w-auto" /> */}
    </nav>
  );
};

export default Navbar;
