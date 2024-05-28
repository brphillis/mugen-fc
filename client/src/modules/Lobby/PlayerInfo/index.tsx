import React, { MutableRefObject } from "react";
import BasicButton from "@/components/Buttons/BasicButton";

type Props = {
  user: User;
  webSocket: MutableRefObject<WebSocket | null>;
  playerNumber: number;
  playerState?: PlayerState;
};

const PlayerInfo = ({ user, webSocket, playerState, playerNumber }: Props) => {
  const readyPlayer = () => {
    const playerData: GameMessage = {
      action: "player_ready",
    };

    const characterStateData = {
      ready: true,
    };

    if (playerNumber === 1) {
      playerData.playerOneState = characterStateData;
    }

    if (playerNumber === 2) {
      playerData.playerTwoState = characterStateData;
    }

    webSocket.current?.send(JSON.stringify(playerData));
  };

  return (
    <div className="select-none flex flex-col items-center text-brand-white/75 w-full h-full text-center justify-center gap-3">
      <div>{playerState?.user || "Waiting..."}</div>
      <div className="font-press_start_2p text-xs">
        {playerNumber === 1 ? "Player 1" : "Player 2"}
      </div>

      <BasicButton
        label={
          user.userName !== playerState?.user && !playerState?.ready
            ? "Waiting"
            : "Ready"
        }
        disabled={playerState?.ready || user.userName !== playerState?.user}
        extendStyle="w-max !text-sm tracking-wide"
        onClick={() => readyPlayer()}
      />
    </div>
  );
};

export default PlayerInfo;
