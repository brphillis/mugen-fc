export const returnPlayerNumber = (user: User, room: Room) => {
  const playerStates = [room.playerOneState, room.playerTwoState];
  return playerStates.findIndex((p) => p.user === user?.userName) + 1;
};
