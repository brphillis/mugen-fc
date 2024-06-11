export const dynamic = "force-dynamic";

import { Lobby } from "@/modules/Lobby";
import { post_JoinRoom } from "@/helpers/async_roomHelpers";
import { get_authenticatedUser } from "@/helpers/async_authHelpers";
import { headers } from "next/headers";
import { correctHost } from "@/helpers/envHelpers";

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const { id } = params;
  const { user, error: authError } = await get_authenticatedUser(headers());

  if (!user) {
    throw new Error("user not found");
  }

  const { room, error: roomError } = await post_JoinRoom(
    id,
    headers(),
    process.env.GAMESERVER_URL!
  );

  if (!room) {
    throw new Error("error joining room");
  }

  const socketURL = process.env.GAMESERVER_SOCKET_URL;

  return (
    <>
      {socketURL ? (
        <Lobby
          gameSocketURL={correctHost(socketURL, true)}
          user={user}
          room={room}
        />
      ) : (
        <div>invalid socket url</div>
      )}
    </>
  );
}
