import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  extendStyle?: string;
};

const MetalNavBar = ({ children, extendStyle }: Props) => {
  return (
    <div
      className={`relative w-[100vw] navbar bg-gradient-to-tr from-black to-brand-white/5 border-y-[1px] border-y-brand-white/10 px-3 ${extendStyle}`}
    >
      <div className="absolute pattern-circuit-board-black/15 pattern-circuit-board-scale-[0.5] w-full h-full"></div>
      {children}
    </div>
  );
};

export default MetalNavBar;
