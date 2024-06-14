import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

// GET - Single Detailed Room
export const get_Room = async (
  url: string,
  id: string
): Promise<{ room?: Room; error?: string }> => {
  if (!url) {
    return { error: `no game server url` };
  }

  try {
    const response = await fetch(`${url}/room/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return { error: `error: ${response.statusText}` };
    }

    const room: Room = await response.json();
    return { room };
  } catch (error) {
    return { error: `failed to fetch rooms: ${(error as Error).message}` };
  }
};

// GET - Multiple Rooms Minimal Data
export const get_Rooms = async (
  url: string,
  onlyAvailable?: boolean
): Promise<{
  rooms?: RoomOverview[];
  error?: string;
}> => {
  if (!url) {
    return { error: `no game server url` };
  }

  try {
    let reqUrl = `${url}/rooms`;

    if (onlyAvailable) {
      reqUrl += "?onlyAvailable=true";
    }

    const response = await fetch(reqUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return { error: `error: ${response.statusText}` };
    }

    const rooms: RoomOverview[] = await response.json();
    return { rooms };
  } catch (error) {
    return { error: `failed to fetch rooms: ${(error as Error).message}` };
  }
};

// POST - Create a Room, user Joins Room
export const post_CreateRoom = async (
  url: string,
  name: string,
  user: string
): Promise<{
  roomId?: string;
  error?: string;
}> => {
  if (!url) {
    return { error: `no game server url` };
  }

  try {
    const data = {
      name,
      user,
    };

    const response = await fetch(`${url}/createRoom`, {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-store",
    });

    if (!response.ok) {
      return { error: `error creating room: ${response.statusText}` };
    }

    const roomId = await response.text();

    return { roomId };
  } catch (error) {
    return {
      error: `(catch) post_createroom error: ${(error as Error).message}`,
    };
  }
};

// POST - Add User to Room
export const post_JoinRoom = async (
  id: string,
  headers: ReadonlyHeaders,
  url: string
): Promise<{ room?: Room; error?: string }> => {
  if (!url) {
    return { error: `no game server url` };
  }

  try {
    const data = {
      id,
    };

    const response = await fetch(`${url}/joinRoom`, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
      cache: "no-store",
      credentials: "include",
    });

    if (!response.ok) {
      console.log("Error Joining Room:", response.statusText);
      return { error: `error: ${response.statusText}` };
    }

    const room: Room = await response.json();

    return { room };
  } catch (error) {
    return {
      error: `(catch) post_joinroom error: ${(error as Error).message}`,
    };
  }
};
