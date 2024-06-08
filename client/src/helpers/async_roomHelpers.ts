import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

// GET - Single Detailed Room
export const get_Room = async (
  id: string
): Promise<{ room?: Room; error?: string }> => {
  try {
    const response = await fetch(`${process.env.GAMESERVER_URLL}/room/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return { error: `Error: ${response.statusText}` };
    }

    const room: Room = await response.json();
    return { room };
  } catch (error) {
    return { error: `Failed to fetch rooms: ${(error as Error).message}` };
  }
};

// GET - Multiple Rooms Minimal Data
export const get_Rooms = async (
  onlyAvailable?: boolean
): Promise<{
  rooms?: RoomOverview[];
  error?: string;
}> => {
  try {
    let url = `${process.env.GAMESERVER_URL}/rooms`;

    if (onlyAvailable) {
      url += "?onlyAvailable=true";
    }

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return { error: `Error: ${response.statusText}` };
    }

    const rooms: RoomOverview[] = await response.json();
    return { rooms };
  } catch (error) {
    return { error: `Failed to fetch rooms: ${(error as Error).message}` };
  }
};

// POST - Create a Room, user Joins Room
export const post_CreateRoom = async (
  name: string,
  user: string
): Promise<{
  roomId?: string;
  error?: string;
}> => {
  try {
    const data = {
      name,
      user,
    };

    const response = await fetch(`${process.env.GAMESERVER_URL}/createRoom`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return { error: `Error: ${response.statusText}` };
    }

    const roomId = await response.text();

    return { roomId };
  } catch (error) {
    return { error: `Failed to Create Room: ${(error as Error).message}` };
  }
};

// POST - Add User to Room
export const post_JoinRoom = async (
  id: string,
  headers: ReadonlyHeaders
): Promise<{ room?: Room; error?: string }> => {
  try {
    const data = {
      id,
    };

    const response = await fetch(`${process.env.GAMESERVER_URL}/joinRoom`, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
      cache: "no-store",
      credentials: "include",
    });

    if (!response.ok) {
      return { error: `Error: ${response.statusText}` };
    }

    const room: Room = await response.json();

    return { room };
  } catch (error) {
    return { error: `Failed to Join Room: ${(error as Error).message}` };
  }
};
