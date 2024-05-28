import React from "react";

type Props = {
  playerState?: PlayerState;
  playerNumber: number;
};

const SelectedCharacter = ({ playerState, playerNumber }: Props) => {
  return (
    <div
      className={`select-none flex items-center justify-center w-[240px] h-[280px] border !border-b-0 border-white/50 bg-gradient-to-tr from-black to-brand-black absolute bottom-0 
     ${playerNumber === 1 ? "left-0 rounded-bl-md" : "right-0 rounded-br-md"}
     ${playerNumber === 1 ? "!border-l-0" : "!border-r-0"}`}
    >
      {playerState?.name ? (
        <img
          key={`selectedcharacterportrait_` + playerState?.name}
          src={"/char/anim/" + playerState?.name + ".gif"}
          className={`w-auto h-full p-3 ${
            playerNumber === 2 ? "-scale-x-100" : ""
          }`}
        />
      ) : (
        <h3 className="font-press_start_2p text-3xl tracking-widest">
          {playerNumber === 1 ? "P1" : "P2"}
        </h3>
      )}

      {playerState?.name && (
        <div className="absolute w-full bg-black/75 h-[45px] bottom-0 flex items-center justify-center text-xl">
          {playerState.name}
        </div>
      )}
    </div>
  );
};

export default SelectedCharacter;
