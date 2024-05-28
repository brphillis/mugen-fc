import React from "react";

export const ReadyButton = () => {
  return (
    <div className="absolute top-0 right-0 left-0 /bg-black/40 w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div
          onClick={() => window?.readyPlayer()}
          className="cursor-pointer text-5xl font-black px-12 py-6 text-white/90 hover:text-white  border-brand-primary/50 hover:border-brand-primary"
        >
          READY?
        </div>
      </div>
    </div>
  );
};
