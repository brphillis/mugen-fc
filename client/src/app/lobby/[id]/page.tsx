export const dynamic = "force-dynamic";

import { Lobby } from "@/modules/Lobby";
import { post_JoinRoom } from "@/helpers/async_roomHelpers";
import { get_authenticatedUser } from "@/helpers/async_authHelpers";
import { headers } from "next/headers";
import { correctHost } from "@/helpers/envHelpers";
import {
  get_CharacterAnims,
  get_CharacterPortraits,
} from "@/helpers/async_characterHelpers";

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const { id } = params;
  const { user, error: authError } = await get_authenticatedUser(headers());

  if (authError) {
    console.error(authError);
  }

  if (!user) {
    throw new Error("user not found");
  }

  const { portraits, error: charError } = await get_CharacterPortraits(
    process.env.BUCKET_URL!
  );

  if (charError) {
    console.error(charError);
  }

  if (!portraits) {
    throw new Error("character list not found");
  }

  const { anims, error: animError } = await get_CharacterAnims(
    process.env.BUCKET_URL!
  );

  if (animError) {
    console.error(animError);
  }

  if (!anims) {
    throw new Error("character anims not found");
  }

  const { room, error: roomError } = await post_JoinRoom(
    id,
    headers(),
    process.env.GAMESERVER_URL!
  );

  if (roomError) {
    console.error(roomError);
  }

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
          portraits={portraits}
          anims={anims}
        />
      ) : (
        <div>invalid socket url</div>
      )}
    </>
  );
}
