import React from "react";
import CubesAnimation from "../../Animation/CubesAnimation";

type Props = {
  id?: string;
  message: string;
  position?: "fixed" | "absolute" | "relative";
  extendStyle?: string;
};

const LoadingCubes_FullScreen = ({
  id,
  message,
  position = "fixed",
  extendStyle,
}: Props) => {
  return (
    <div
      id={id}
      className={`${position} overflow-hidden w-[100dvw] h-[100dvh] bg-slate-900/90 ${extendStyle}`}
    >
      <div className="absolute left-[46%] top-[40%] max-md:left-0 max-md:right-0 flex flex-col items-center justify-center gap-6 select-none">
        <CubesAnimation />

        <div className="font-acme text-brand-white text-4xl max-md:text-lg text-nowrap mt-2">
          {message}
        </div>
      </div>
    </div>
  );
};

export default LoadingCubes_FullScreen;
