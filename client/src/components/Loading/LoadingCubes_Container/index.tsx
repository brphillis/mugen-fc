import CubesAnimation from "@/components/Animation/CubesAnimation";
import React from "react";

type Props = {};

const LoadingCubes_Container = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-y-3 h-max w-[720px] max-lg:w-[720px] max-md:w-[480px] max-w-full items-center py-12">
      <CubesAnimation />

      <div className="font-acme text-brand-white text-2xl max-md:text-lg text-nowrap mt-2">
        Loading...
      </div>
    </div>
  );
};

export default LoadingCubes_Container;
