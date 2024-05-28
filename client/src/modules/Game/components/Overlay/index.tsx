import React from "react";

type Props = {
  text: string;
};

export const Overlay = ({ text }: Props) => {
  return (
    <div className="absolute top-0 right-0 left-0 bg-black w-full h-full flex justify-center items-center rounded-md">
      <div className="text-white text-2xl">{text}</div>
    </div>
  );
};
