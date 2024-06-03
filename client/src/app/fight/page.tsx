import { get_authenticatedUser } from "@/helpers/async_authHelpers";
import { get_Room } from "@/helpers/async_roomHelpers";
import { Game } from "@/modules/Game";
import { headers } from "next/headers";
import Script from "next/script";

type Props = { searchParams: { id: string } };

export default async function Page({ searchParams }: Props) {
  const { id } = searchParams;
  const { user } = await get_authenticatedUser(headers());

  if (!user) {
    throw new Error("User Not Found");
  }

  const { room } = await get_Room(id);

  if (!room) {
    throw new Error("Room Not Found");
  }

  const playerOneName = room?.playerOneState.name?.toLocaleLowerCase();
  const playerTwoName = room?.playerTwoState.name?.toLocaleLowerCase();

  const response = await fetch(
    `${process.env.BUCKET_SERVER_URL}/api/characters?playerOne=${playerOneName}&playerTwo=${playerTwoName}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const base64Data = await response.json();

  return (
    <div className="mt-12">
      {process.env.NEXT_PUBLIC_GAME_SERVER_SOCKET_URL && (
        <Game
          gameSocketURL={process.env.NEXT_PUBLIC_GAME_SERVER_SOCKET_URL}
          encodedGameFilesString={JSON.stringify(base64Data)}
          user={user}
          room={room}
        />
      )}
      {!process.env.NEXT_PUBLIC_GAME_SERVER_SOCKET_URL && (
        <div>Invalid Game Socket</div>
      )}
      <Script defer async strategy="beforeInteractive" src="/mugen.js" />
    </div>
  );
}
