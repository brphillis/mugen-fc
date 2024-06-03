import { RoomManager } from "@/modules/RoomManager";
import { get_Rooms } from "@/helpers/async_roomHelpers";
import { AuthContextProvider } from "@/context/AuthContext";

export default async function Page() {
  const { rooms } = await get_Rooms(true);

  return (
    <AuthContextProvider
      authServerUrl={process.env.NEXT_PUBLIC_AUTH_SERVER_URL!}
    >
      <RoomManager initialRooms={rooms} />
    </AuthContextProvider>
  );
}
