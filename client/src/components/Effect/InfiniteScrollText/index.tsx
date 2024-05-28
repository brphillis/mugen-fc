import React from "react";

type Props = {
  text: string;
  extendStyle?: string;
};

export const InfiniteScrollText = ({ text, extendStyle }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden space-x-16">
      <div className="flex space-x-16 animate-loop-scroll">
        {Array(30)
          .fill(null)
          .map((_, index) => (
            <div
              key={"infiniteTextOne_" + index}
              className={`max-w-none text-nowrap ${extendStyle}`}
            >
              {text}
            </div>
          ))}
      </div>
      <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
        {Array(30)
          .fill(null)
          .map((_, index) => (
            <div
              key={"infiniteTextTwo_" + index}
              className={`max-w-none text-nowrap ${extendStyle}`}
            >
              {text}
            </div>
          ))}
      </div>
    </div>
  );
};

// Tailwind Extend Settings Required

// animation: {
//   "loop-scroll": "loop-scroll 50s linear infinite",
// },
// keyframes: {
//   "loop-scroll": {
//     from: { transform: "translateX(0)" },
//     to: { transform: "translateX(-100%)" },
//   },
// },
