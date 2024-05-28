import React from "react";

type Props = {
  item1: JSX.Element | JSX.Element[];
  item2: JSX.Element | JSX.Element[];
};

const BasicHorizontalContainer = ({ item1, item2 }: Props) => {
  return (
    <div className="flex max-md:flex-col-reverse flex-wrap justify-center items-start gap-12 max-md:gap-6 w-[80%] max-md:w-[98%] rounded-lg bg-white/5 px-3 py-12">
      <div className="flex flex-col items-center py-3 w-[640px] max-w-full">
        {item1}
      </div>

      <div className="flex flex-col items-center py-3 w-[540px] max-w-full text-center">
        {item2}
      </div>
    </div>
  );
};

export default BasicHorizontalContainer;
