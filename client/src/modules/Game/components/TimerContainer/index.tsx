import React from "react";

type Props = { gameState?: GameState };

export const TimerContainer = ({ gameState }: Props) => {
  return (
    <div className="relative flex flex-col items-center gap-3 bg-black/75 rounded-md p-6 pt-3 -mb-3 pb-9 text-white justify-center w-[100px]">
      <div className="text-2xl font-bold tracking-wide">
        {gameState?.time || 0}
      </div>

      <div className="absolute bottom-3 text-xs tracking-wide">
        Round {gameState?.round || 1}
      </div>
    </div>
  );
};
