"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { returnPlayerNumber } from "@/helpers/gameHelpers";
import SelectedCharacter from "./SelectedCharacter";
import PlayerInfo from "./PlayerInfo";
import { InfiniteScrollText } from "@/components/Effect/InfiniteScrollText";

type Props = {
  gameSocketURL: string;
  user: User;
  room: Room;
};

export const Lobby = ({ gameSocketURL, user, room }: Props) => {
  const [playerOneState, setPlayerOneState] = useState<PlayerState>();
  const [playerTwoState, setPlayerTwoState] = useState<PlayerState>();
  const [playersReady, setPlayersReady] = useState<boolean>(false);
  const [countDown, setCountDown] = useState<number>(5);

  const params = useParams<{ id: string }>();
  const webSocket = useRef<WebSocket | null>(null);

  const playerNumber = returnPlayerNumber(user, room);

  const charMeta = [
    {
      name: "wildwolf",
    },
    {
      name: "aner",
    },
    {
      name: "balto",
    },
    {
      name: "laurence",
    },
    {
      name: "alou",
    },
    {
      name: "bob",
    },
    {
      name: "syota",
    },
    {
      name: "iori",
    },
  ];

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

    webSocket.current!.send(JSON.stringify(gameData));
  };

  useEffect(() => {
    const url = `${gameSocketURL}/ws/room/${params.id}`;
    let retries = 0;
    const maxRetries = 6;
    let reconnectTimeout: NodeJS.Timeout;

    const connectWebSocket = () => {
      webSocket.current = new WebSocket(url);

      webSocket.current.onopen = () => {
        console.log("WebSocket connection established");
        retries = 0; // Reset retry count upon successful connection
      };

      webSocket.current.onmessage = (event) => {
        const message = JSON.parse(event.data);

        if (
          (playerNumber === 1 && message?.playerOneState) ||
          message?.playerTwoState
        ) {
          setPlayerOneState(message?.playerOneState);
          setPlayerTwoState(message?.playerTwoState);
        }
      };

      webSocket.current.onerror = (error) => {
        console.error("WebSocket error", error);
        reconnect();
      };

      webSocket.current.onclose = () => {
        console.log("WebSocket connection closed");
        reconnect();
      };
    };

    const reconnect = () => {
      if (retries < maxRetries) {
        retries++;
        console.log(
          `Attempting to reconnect (attempt ${retries} of ${maxRetries})...`
        );
        reconnectTimeout = setTimeout(connectWebSocket, 250); // Retry after 500ms
      } else {
        console.log("Maximum number of retries reached. Connection failed.");
      }
    };

    connectWebSocket();

    return () => {
      clearTimeout(reconnectTimeout);
      if (webSocket.current) {
        webSocket.current.close();
      }
    };
  }, []);

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
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col bg-gradient-to-tr from-black to-brand-white/5 overflow-hidden w-[1340px] h-[705px] rounded-md mt-12 border border-white/50">
        <div className="w-full h-[75%] bg-white/5 rounded-md">
          <div className="flex flex-wrap h-max w-full justify-center mt-[15px]">
            {charMeta.map((c) => {
              return (
                <div
                  key={`characterportrait_` + c.name}
                  className="relative border border-white/25 w-[56px] h-[56px]"
                >
                  <img
                    onClick={() => handleChangeCharacter(c.name)}
                    src={
                      "https://storage.cloud.google.com/mugen-fc/characters/portrait/" +
                      c.name +
                      ".png"
                    }
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              );
            })}

            {Array(161 - charMeta.length)
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

              {/* <BasicButton
                label={
                  !playerOneState?.name || !playerTwoState?.name
                    ? `Waiting...`
                    : `Join Game`
                }
                disabled={!playerOneState?.name || !playerTwoState?.name}
                onClick={() => {
                  window.location.href = `/fight?id=${params.id}`;
                }}
                extendStyle="w-max !p-8 tracking-wide"
              /> */}
            </div>

            <PlayerInfo
              user={user}
              webSocket={webSocket}
              playerNumber={2}
              playerState={playerTwoState}
            />
          </div>
        </div>
        <SelectedCharacter playerNumber={1} playerState={playerOneState} />
        <SelectedCharacter playerNumber={2} playerState={playerTwoState} />
      </div>
    </div>
  );
};
