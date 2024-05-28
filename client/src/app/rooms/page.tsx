import { RoomManager } from "@/modules/RoomManager";
import { get_Rooms } from "@/helpers/async_roomHelpers";
import { AuthContextProvider } from "@/context/AuthContext";

export default async function Page() {
  const { rooms } = await get_Rooms(true);

  return (
    <AuthContextProvider>
      <RoomManager initialRooms={rooms} />
    </AuthContextProvider>
  );
}
