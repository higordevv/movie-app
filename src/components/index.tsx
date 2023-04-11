import dynamic from "next/dynamic";
import Skeleton from "react-loading-skeleton";

const Navbar = dynamic(() => import("./navbar/Navbar"), {
    loading: () => { 
      return(
  
      <div className="flex gap-9">
        <Skeleton width={8} height={12}  />
        <Skeleton width={8} height={12} />
        <Skeleton width={8} height={12} />
      </div>
      )
    },
    ssr: false,
  });


  export const S = Object.freeze({
    Navbar
  })