import { Lobby } from "@/modules/Lobby";
import { post_JoinRoom } from "@/helpers/async_roomHelpers";
import { get_authenticatedUser } from "@/helpers/async_authHelpers";
import { headers } from "next/headers";

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const { id } = params;

  const { user } = await get_authenticatedUser(headers());

  if (!user) {
    throw new Error("User Not Found");
  }

  const { room } = await post_JoinRoom(id, headers());

  if (!room) {
    throw new Error("Error Joining Room");
  }

  return <Lobby user={user} room={room} />;
}
