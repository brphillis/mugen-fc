import { RoomManager } from "@/modules/RoomManager";
import { get_Rooms } from "@/helpers/async_roomHelpers";
import { AuthContextProvider } from "@/context/AuthContext";
import { NextResponse } from "next/server";

export default async function Page() {
  const { rooms } = await get_Rooms(true);

  if (process.env.NEXT_PUBLIC_AUTH_SERVER_URL) {
    return (
      <AuthContextProvider
        authServerUrl={process.env.NEXT_PUBLIC_AUTH_SERVER_URL}
      >
        <RoomManager initialRooms={rooms} />
      </AuthContextProvider>
    );
  } else {
    return NextResponse.json(
      { error: "Authorization Server Not Found" },
      { status: 401 }
    );
  }
}
