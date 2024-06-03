import React, { useEffect, useState } from "react";

type Props = {
  gameState?: GameState;
  playerOneState?: PlayerState;
  playerTwoState?: PlayerState;
};

export const GameStartDisplay = ({
  gameState,
  playerOneState,
  playerTwoState,
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isCooldown, setIsCooldown] = useState<boolean>(false);
  const [displayText, setDisplayText] = useState<string>();

  useEffect(() => {
    if (!isCooldown) {
      const shouldDisplay =
        playerOneState?.ready &&
        playerTwoState?.ready &&
        playerOneState.inGame &&
        playerTwoState.inGame &&
        gameState?.initiated;

      if (shouldDisplay) {
        setIsCooldown(true);
        setIsActive(true);
        setDisplayText("START");
      }
    }

    if (!gameState?.initiated) {
      setIsCooldown(false);
    }
  }, [gameState, playerOneState, playerTwoState, isCooldown]);

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
