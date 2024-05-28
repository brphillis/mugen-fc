"use client";

import React, { useEffect, useState } from "react";
import { ReadyButton } from "./components/ReadyButton";
import { Overlay } from "./components/Overlay";
import { WaitingText } from "./components/WaitingText";
import { PlayerInformation } from "./components/PlayerInformation";
import { TimerContainer } from "./components/TimerContainer";
import { parseQueryString } from "@/helpers/queryHelpers";
import { gameSocketBaseUrl } from "../../../const";
import { returnPlayerNumber } from "@/helpers/gameHelpers";
import { WinnerDisplay } from "./components/WinnerDisplay";

type Props = {
  encodedGameFilesString: string;
  room: Room;
  user: User;
};

export const Game = ({ encodedGameFilesString, user, room }: Props) => {
  const [gameLoading, setGameLoading] = useState<boolean>(true);
  const [gameState, setGameState] = useState<GameState>();
  const [playerOneState, setPlayerOneState] = useState<PlayerState>();
  const [playerTwoState, setPlayerTwoState] = useState<PlayerState>();
  const [isReady, setIsReady] = useState<boolean | undefined>(false);

  useEffect(() => {
    const queryString = window.location.search;
    const queryParams = parseQueryString(queryString);
    const fightId = queryParams["id"];

    window.currentPlayerNumber = returnPlayerNumber(user, room);
    window.gameFiles = JSON.parse(encodedGameFilesString);

    const url = `${gameSocketBaseUrl}${fightId}`;
    window.mugenSocketUrl = url;
  }, []);

  // updating player health and round time on ui
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (window?.playerOneState) {
        setPlayerOneState(window.playerOneState);
      }

      if (window?.playerTwoState) {
        setPlayerTwoState(window.playerTwoState);
      }

      if (window?.gameState) {
        setGameState(window.gameState);
      }

      if (window?.gameLoaded === true) {
        setGameLoading(false);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  // isReady for Waiting Text
  useEffect(() => {
    const currentPlayerState =
      window.currentPlayerNumber === 1 ? playerOneState : playerTwoState;

    setIsReady(currentPlayerState?.ready);
  }, [playerOneState?.ready, playerTwoState?.ready]);

  // listen for round winner for displaying round winner
  useEffect(() => {
    console.log("winners", gameState?.winners);
  }, [gameState?.winners]);

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="relative" id="game">
        <div className="absolute flex justify-between top-6 left-1/2 translate-x-[-50%] w-full px-12 select-none">
          <PlayerInformation
            playerState={playerOneState}
            playerNumber={1}
            gameState={gameState}
          />

          <TimerContainer gameState={gameState} />

          <PlayerInformation
            playerState={playerTwoState}
            playerNumber={2}
            gameState={gameState}
          />
        </div>

        <canvas
          id="gamecanvas"
          width="1024"
          height="540"
          className="rounded-md shadow-lg"
        ></canvas>

        {isReady && (!playerOneState?.ready || !playerTwoState?.ready) && (
          <WaitingText />
        )}

        {!isReady && !gameState?.initiated && <ReadyButton />}

        {!gameState?.initiated && <WinnerDisplay gameState={gameState} />}

        {gameLoading && <Overlay text="Loading..." />}

        {gameState?.gameOver && <Overlay text="Game Over" />}

        {gameState?.disconnected && <Overlay text="Disconnected" />}
      </div>

      {/* TEMP CONTROLS */}
      {/* <div className="hidden justify-center w-full">
        🔊
        <input
          id="basevol"
          className="w-[50px]"
          type="range"
          value="0.1"
          min="0.0"
          max="1.0"
          step="0.01"
          readOnly
        />
      </div> */}
    </div>
  );
};
