"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { returnPlayerNumber } from "@/helpers/gameHelpers";
import { ScreenSizeEnforcer } from "@/components/Overlays/ScreenSizeEnforcer";
import { InfiniteScrollText } from "@/components/Effect/InfiniteScrollText";
import PlayerInfo from "./PlayerInfo";
import SelectedCharacter from "./SelectedCharacter";

type Props = {
  gameSocketURL: string;
  user: User;
  room: Room;
  portraits: Base64Image[];
  anims: Base64Image[];
};

export const Lobby = ({
  gameSocketURL,
  user,
  room,
  portraits,
  anims,
}: Props) => {
  const [playerOneState, setPlayerOneState] = useState<PlayerState>();
  const [playerTwoState, setPlayerTwoState] = useState<PlayerState>();
  const [playersReady, setPlayersReady] = useState<boolean>(false);
  const [countDown, setCountDown] = useState<number>(5);

  const params = useParams<{ id: string }>();
  const webSocket = useRef<WebSocket | null>(null);

  const playerNumber = returnPlayerNumber(user, room);

  const handleChangeCharacter = async (characterName: string) => {
    const gameData: GameMessage = {
      action: "player_character",
    };

    if (playerNumber === 1) {
      gameData.playerOneState = {};
      gameData.playerOneState.name = characterName;
    }

    if (playerNumber === 2) {
      gameData.playerTwoState = {};
      gameData.playerTwoState.name = characterName;
    }

    if (webSocket.current) {
      webSocket.current.send(JSON.stringify(gameData));
    }
  };

  // maintains connection and updates playerstate
  useEffect(() => {
    const url = `${gameSocketURL}/ws/room/${params.id}`;
    const maxRetries = 6;

    let retries = 0;
    let reconnectTimeout: NodeJS.Timeout;
    let isMounted = true;

    const connectWebSocket = () => {
      webSocket.current = new WebSocket(url);

      webSocket.current.onopen = () => {
        console.log("WebSocket connection established");
        retries = 0;
      };

      webSocket.current.onmessage = (event) => {
        const message = JSON.parse(event.data);

        // We should only update playerstate if the message is from game? or playerstate?
        if (
          (isMounted && playerNumber === 1 && message?.playerOneState) ||
          (isMounted && message?.playerTwoState)
        ) {
          setPlayerOneState(message?.playerOneState);
          setPlayerTwoState(message?.playerTwoState);
        }
      };

      webSocket.current.onerror = (error) => {
        console.error("WebSocket error", error);
        if (isMounted) {
          reconnect();
        }
      };

      webSocket.current.onclose = () => {
        console.log("WebSocket connection closed");
        if (isMounted) {
          reconnect();
        }
      };
    };

    const reconnect = () => {
      if (retries < maxRetries && isMounted) {
        retries++;
        reconnectTimeout = setTimeout(connectWebSocket, 250);
      } else {
        console.log(
          "Maximum number of reconnection retries reached. Connection failed."
        );
      }
    };

    connectWebSocket();

    return () => {
      clearTimeout(reconnectTimeout);
      isMounted = false;
      if (webSocket.current) {
        webSocket.current.close();
      }
    };
  }, []);

  // handles game start when players are ready
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    // both players ready - initiate countdown then navigate to fight
    if (playerOneState?.ready && playerTwoState?.ready) {
      intervalId = setInterval(() => {
        setCountDown((currentCountDown) => {
          if (currentCountDown === 1) {
            clearInterval(intervalId);
            window.location.href = `/fight?id=${params.id}`;

            return 0;
          }
          return currentCountDown - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [playerOneState?.ready && playerTwoState?.ready]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col bg-gradient-to-tr from-black to-brand-white/5 overflow-hidden w-[1340px] h-[705px] rounded-md mt-12 border border-white/50">
          <div className="w-full h-[75%] bg-white/5 rounded-md">
            <div className="flex flex-wrap h-max w-full justify-center mt-[15px]">
              {portraits.map(({ name, image }: Base64Image) => {
                return (
                  <div
                    key={`characterportrait_` + name}
                    className="relative border border-white/25 h-[56px] w-[56px]"
                  >
                    <img
                      onClick={() => handleChangeCharacter(name)}
                      alt={"character_portrait_" + name}
                      src={image}
                      className="h-full w-full object-cover cursor-pointer"
                    />
                  </div>
                );
              })}

              {Array(161 - portraits.length)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={"placeholdercharacter_" + index}
                    className="relative select-none border border-white/25 w-[56px] h-[56px] font-press_start_2p flex items-center justify-center"
                  >
                    <span className="opacity-10">?</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="relative w-full h-[49.5%] flex justify-center">
            <div className="absolute top-0 bg-black/25 w-full h-[40px]">
              <InfiniteScrollText
                text={
                  playerOneState?.name && playerTwoState?.name
                    ? `READY TO FIGHT`
                    : `SELECT CHARACTER`
                }
                extendStyle="text-brand-white/20 font-press_start_2p text-xs"
              />
            </div>

            <div className="relative w-[862px] flex justify-center items-center h-full">
              <PlayerInfo
                user={user}
                webSocket={webSocket}
                playerNumber={1}
                playerState={playerOneState}
              />

              <div className="flex flex-col items-center w-full bg-white-10 gap-3 -mt-6">
                {!playersReady && (
                  <div className="opacity-10 select-none text-5xl">VS</div>
                )}

                {playerOneState?.ready && playerTwoState?.ready && (
                  <div
                    className={`select-none font-press_start_2p ${
                      countDown > 0 ? "text-6xl" : "text-lg mt-3"
                    }`}
                  >
                    {countDown > 0 ? countDown : "Joining..."}
                  </div>
                )}
              </div>

              <PlayerInfo
                user={user}
                webSocket={webSocket}
                playerNumber={2}
                playerState={playerTwoState}
              />
            </div>
          </div>
          <SelectedCharacter
            playerNumber={1}
            playerState={playerOneState}
            anims={anims}
          />
          <SelectedCharacter
            playerNumber={2}
            playerState={playerTwoState}
            anims={anims}
          />
        </div>
      </div>
      <ScreenSizeEnforcer />
    </>
  );
};
