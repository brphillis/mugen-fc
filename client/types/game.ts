declare global {
  interface Window {
    mugenSocket: WebSocket;
    mugenSocketUrl: string;
    currentPlayerNumber: number;
    playerOneState?: PlayerState;
    playerTwoState?: PlayerState;
    gameFiles?: GameFiles;
    gameState?: GameState;
    gameLoaded?: boolean;
    readyPlayer: () => Promise<any>;
  }

  interface RoomOverview {
    id: string;
    name: string;
    players: string[];
  }

  interface Room {
    name: string;
    id: string;
    playerOneState: PlayerState;
    playerTwoState: PlayerState;
    gameState: GameState;
  }

  interface PlayerState {
    user?: string;
    life?: number;
    name?: string;
    ready?: boolean;
    x?: number;
    y?: number;
    damage?: number;
  }

  interface GameFiles {
    playerOneBase64: string;
    playerOneFileName: string;
  }

  interface GameState {
    disconnected?: boolean;
    ended?: boolean;
    gameOver?: boolean;
    initiated?: boolean;
    round?: number;
    time?: number;
    winners?: number[];
  }

  interface GameMessage {
    action?: string;
    userName?: string;
    playerOneState?: PlayerState;
    playerTwoState?: PlayerState;
    gameState?: GameState;
  }
}

export default global;
