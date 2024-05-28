import React, { useEffect, useState } from "react";

type Props = {
  gameState?: GameState;
};

export const WinnerDisplay = ({ gameState }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>();
  const [winners, setWinners] = useState<number[]>();

  useEffect(() => {
    if (!isCooldown && gameState?.winners && gameState.winners?.length > 0) {
      const newWinners = gameState.winners;
      if (JSON.stringify(newWinners) !== JSON.stringify(winners)) {
        setWinners(newWinners);
        const newWinner = newWinners?.[newWinners.length - 1];

        if (newWinner) {
          setIsActive(true);
          setIsCooldown(true);
          setTimeout(() => setIsCooldown(false), 20000);

          switch (newWinner) {
            case 1:
              setDisplayText("PLAYER 1 WINS");
              break;
            case 2:
              setDisplayText("PLAYER 2 WINS");
              break;
            case 0:
              setDisplayText("DRAW");
              break;
            default:
              setDisplayText("");
          }
        }
      }
    }
  }, [gameState, winners, isCooldown]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isActive) {
      timeout = setTimeout(() => {
        setIsActive(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isActive]);

  return (
    <>
      {isActive && (
        <div className="animate-jump-in animate-duration-2000 absolute top-[30%] right-0 left-0 w-full h-full flex justify-center items-center rounded-md">
          <div className="flex flex-col items-center justify-start h-full w-full">
            <div className="cursor-pointer text-5xl font-bold text-white/75 rounded-md">
              {displayText}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
