import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Navbar = dynamic(() => import("./navbar"), {
  loading: () => {
    return (
      <div className="flex p-8 gap-9 w-full justify-stretch">
        <div className="flex gap-16">
          <Skeleton width={80} height={35} />
          <Skeleton width={80} height={35} />
          <Skeleton width={80} height={35} />
        </div>
        <div className="mx-auto md:mx-48">
          <Skeleton width={80} height={40} borderRadius={"none"} />
        </div>
      </div>
    );
  },
  ssr: false,
});

const Card = dynamic(() => import("./card"), {
  loading: () => (
    <Skeleton
      width={"15vw"}
      height={"50vh"}
      borderRadius={"10px"}
      className="m-2"
    />
  ),
  ssr: false,
});

const Footer = dynamic(() => import("./footer"), { ssr: false });

const Button = dynamic(() => import("./button"), {ssr: false})

export const S = Object.freeze({
  Navbar,
  Card,
  Footer,
  Button
});
