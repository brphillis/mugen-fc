import React from "react";

export const WaitingText = () => {
  return (
    <div className="absolute top-0 right-0 left-0 w-full h-full flex justify-center items-center rounded-md">
      <div className="flex flex-col items-center justify-start h-full w-full">
        <div className="mt-[175px] cursor-pointer text-2xl text-white/75 rounded-md">
          Waiting for Opponent...
        </div>
      </div>
    </div>
  );
};
