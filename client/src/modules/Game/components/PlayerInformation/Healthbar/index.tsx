import { convertPercentageToNumber } from "@/helpers/numberHelpers";
import React from "react";

type Props = {
  playerState?: PlayerState;
  playerNumber: number;
};

const Healthbar = ({ playerState, playerNumber }: Props) => {
  let healthColor = "bg-green-600";

  const playerHealthPercentage = playerState?.life
    ? playerState?.life / 10 + "%"
    : 0 + "%";

  const playerHealthPercentageNumber = convertPercentageToNumber(
    playerHealthPercentage
  );

  if (playerHealthPercentageNumber < 60) {
    healthColor = "bg-yellow-400";
  }

  if (playerHealthPercentageNumber < 25) {
    healthColor = "bg-red-600";
  }

  return (
    <div
      className={`relative w-full flex h-12 rounded-md overflow-hidden bg-slate-500
        ${playerNumber === 1 ? "rounded-tr-[100%]" : "rounded-tl-[100%]"}
        ${playerNumber === 1 ? "justify-end" : "justify-start"}`}
    >
      <div
        style={{
          width: playerState?.life ? playerState?.life / 10 + "%" : 0 + "%",
          display:
            !playerState?.life || (playerState?.life && playerState?.life <= 0)
              ? "none"
              : "block",
        }}
        className={`h-full flex items-center px-3 text-sm text-black/25 transition-all duration-150 ease-in-out border-2 border-white/50 
        ${healthColor}
        ${playerNumber === 1 ? "justify-start" : "justify-end"}
        ${playerNumber === 1 ? "rounded-tr-[80%]" : "rounded-tl-[80%]"}`}
      >
        {/* {playerState?.life} */}
      </div>
    </div>
  );
};

export default Healthbar;
