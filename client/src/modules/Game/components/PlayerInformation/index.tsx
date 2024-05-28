import React from "react";
import { RoundResult } from "./RoundResult";
import Healthbar from "./Healthbar";

type Props = {
  playerState?: PlayerState;
  playerNumber: number;
  gameState?: GameState;
};

export const PlayerInformation = ({
  playerNumber,
  playerState,
  gameState,
}: Props) => {
  return (
    <div
      className={`relative flex flex-col w-[42%] gap-1
      ${playerNumber === 1 ? "items-start" : "items-end"}`}
    >
      <div
        className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[110%] h-[125%] bg-black/75 rounded-md
      ${playerNumber === 1 ? "rounded-tr-[100%]" : "rounded-tl-[100%]"}
      `}
      ></div>

      <div className="relative text-white px-2 font-bold tracking-wide">
        {playerState?.name || "Player"}
      </div>

      <Healthbar playerState={playerState} playerNumber={playerNumber} />

      <div
        className={`absolute -bottom-9 flex gap-3 justify-center
       ${playerNumber === 1 ? "-right-6" : "-left-6"}
       ${playerNumber === 1 ? "flex-row-reverse" : "flex-row"}
      `}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <RoundResult
              key={index}
              index={index}
              playerNumber={playerNumber}
              gameState={gameState}
            />
          ))}
      </div>
    </div>
  );
};
