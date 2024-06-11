export const dynamic = "force-dynamic";

import { get_authenticatedUser } from "@/helpers/async_authHelpers";
import { get_Room } from "@/helpers/async_roomHelpers";
import { correctHost } from "@/helpers/envHelpers";
import { Game } from "@/modules/Game";
import { headers } from "next/headers";
import Script from "next/script";

type Props = { searchParams: { id: string } };

export default async function Page({ searchParams }: Props) {
  const { id } = searchParams;
  const { user, error: authError } = await get_authenticatedUser(headers());

  if (!user) {
    throw new Error("user not found");
  }

  const { room, error: roomError } = await get_Room(
    process.env.GAMESERVER_URL!,
    id
  );

  if (!room) {
    throw new Error("room not found");
  }

  const playerOneName = room?.playerOneState.name?.toLocaleLowerCase();
  const playerTwoName = room?.playerTwoState.name?.toLocaleLowerCase();

  const options: RequestInit = {
    method: "GET",
    credentials: "include",
  };

  const response = await fetch(
    `${process.env.BUCKET_URL}/api/characters?playerOne=${playerOneName}&playerTwo=${playerTwoName}`,
    options
  );

  if (!response.ok) {
    throw new Error(
      `error response from bucket endpoint: ${response.statusText}`
    );
  }

  const base64Data = await response.json();

  const socketURL = process.env.GAMESERVER_SOCKET_URL;

  return (
    <div className="mt-12">
      {socketURL ? (
        <Game
          encodedGameFilesString={JSON.stringify(base64Data)}
          gameSocketURL={correctHost(socketURL, true)}
          user={user}
          room={room}
        />
      ) : (
        <div>invalid socket url</div>
      )}
      <Script defer async strategy="beforeInteractive" src="/mugen.js" />
    </div>
  );
}
