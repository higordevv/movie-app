import Image from "next/image";
import { Copyright } from "phosphor-react";

function Footer() {
  return (
    <div className="w-screen h-[100px] text-white flex flex-col justify-center items-center bg-black gap-5 md:gap-2">
      <span className="flex flex-row justify-center items-center gap-3">
        <h2>Copyright</h2> <Copyright />{" "}
        <a
          href="https://github.com/higordevv"
          target="_blank"
          rel="noopener noreferrer"
        ><h2 className="font-bold">Higor Dev</h2></a>
        <div className="border h-8 border-slate-700"/>
        <h2>The Movie Data Base</h2>
        <Image src="/Icon.svg" alt="icon" width={50} height={50} />

      </span>
    </div>
  );
}
export default Footer;
