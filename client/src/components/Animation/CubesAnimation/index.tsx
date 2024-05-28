import React from "react";
import { GiCube } from "react-icons/gi";

type Props = {};

const CubesAnimation = (props: Props) => {
  return (
    <div className="flex flex-row items-end gap-3">
      <div className="animate-wiggle-more animate-infinite animate-duration-1000 text-brand-primary text-3xl max-md:text-xl">
        <GiCube />
      </div>

      <div className="animate-wiggle-more animate-infinite animate-duration-1000 text-brand-primary text-5xl max-md:text-3xl">
        <GiCube />
      </div>

      <div className="animate-wiggle-more animate-infinite animate-duration-1000 text-brand-primary text-7xl max-md:text-5xl">
        <GiCube />
      </div>
    </div>
  );
};

export default CubesAnimation;
