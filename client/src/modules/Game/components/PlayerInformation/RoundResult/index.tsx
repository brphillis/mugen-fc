type Props = {
  index: number;
  playerState?: PlayerState;
  playerNumber: number;
  gameState?: GameState;
};

export const RoundResult = ({ index, gameState, playerNumber }: Props) => {
  let color = "bg-black/75";

  switch (gameState?.winners?.[index]) {
    case playerNumber: {
      color = "bg-brand-green";
      break;
    }

    case 3: {
      color = "bg-brand-yellow";
      break;
    }
  }

  if (
    gameState?.winners?.[index] &&
    gameState?.winners?.[index] !== 3 &&
    gameState?.winners?.[index] !== playerNumber
  ) {
    color = "bg-brand-red";
  }

  return <div className={`w-5 h-5 rounded-full ${color}`}></div>;
};
