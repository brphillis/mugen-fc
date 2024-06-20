import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { correctHost } from "@/helpers/envHelpers";
import { RoomManager } from "@/modules/RoomManager";
import { get_Rooms } from "@/helpers/async_roomHelpers";
import { AuthContextProvider } from "@/context/AuthContext";
import { get_authenticatedUser } from "@/helpers/async_authHelpers";

export default async function Page() {
  const {
    user: foundUser,
    redirectUrl,
    error: authError,
  } = await get_authenticatedUser(headers());

  if (authError) {
    console.error(authError);
  }

  if (redirectUrl) {
    return redirect(redirectUrl);
  }

  const gameServerURL = process.env.GAMESERVER_URL;

  const { rooms, error: roomError } = await get_Rooms(gameServerURL!, true);

  if (roomError) {
    console.error(roomError);
  }

  if (foundUser) {
    return (
      <AuthContextProvider user={foundUser}>
        <RoomManager
          gameServerURL={correctHost(gameServerURL!, true)}
          initialRooms={rooms}
        />
      </AuthContextProvider>
    );
  } else {
    return <div>{authError || roomError || "an error has occurred"}</div>;
  }
}
