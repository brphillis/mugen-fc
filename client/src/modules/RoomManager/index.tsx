"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import BasicButton from "@/components/Buttons/BasicButton";
import BasicInput from "@/components/Forms/Input/BasicInput";
import {
  get_Rooms,
  post_CreateRoom,
  post_JoinRoom,
} from "@/helpers/async_roomHelpers";
import { AuthContext } from "@/context/AuthContext";
import { Icon } from "@/components/Icons/Icon";

type Props = {
  initialRooms?: RoomOverview[];
};

export const RoomManager = ({ initialRooms }: Props) => {
  const [createRoomName, setCreateRoomName] = useState<string>("Room Name");
  const [currentRooms, setCurrentRooms] = useState<RoomOverview[] | undefined>(
    initialRooms
  );
  const { user } = useContext(AuthContext);
  const { userName } = user || {};
  const router = useRouter();

  const handleCreateRoom = async () => {
    const { roomId } = await post_CreateRoom(createRoomName, userName);

    if (roomId) {
      router.push(`/lobby/${roomId}`);
    }
  };

  const handleJoinRoom = async (roomId: string) => {
    router.push(`/lobby/${roomId}`);
  };

  const handleRefreshRooms = async () => {
    const { rooms } = await get_Rooms(true);

    if (rooms && rooms.length > 0) {
      setCurrentRooms(rooms);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center p-6">
      <div className="relative w-[420px] flex flex-col gap-3 justify-center items-center p-6 max-lg:px-3 rounded-md max-lg:rounded-none max-w-[100vw] bg-gradient-to-tr from-black to-brand-white/5 border-brand-primary/50 border">
        <Icon
          icon="refresh"
          extendStyle="absolute top-3 right-3 cursor-pointer opacity-50 hover:animate-spin"
          onClick={handleRefreshRooms}
        />

        <h2 className="select-none tracking-wide text-xl">Current Rooms</h2>

        <div className="divider my-0 opacity-50"></div>

        {!currentRooms ||
          (currentRooms?.length === 0 && (
            <div className="select-none mt-3 opacity-50">
              No Available Rooms.
            </div>
          ))}

        {/* Room List */}
        <div className="flex flex-col items-center gap-3 w-full">
          {currentRooms?.map(
            ({ id, name, players }: RoomOverview, index: number) => {
              const playersInRoom = players.filter((p) => p != null).length;
              const roomCapacity = players.length;

              return (
                <div
                  key={`room-${index}`}
                  onClick={() => handleJoinRoom(id)}
                  className="w-full rounded-md p-3 px-6 flex justify-between cursor-pointer bg-white/5"
                >
                  <div>{name}</div>

                  <div>{playersInRoom + "/" + roomCapacity}</div>
                </div>
              );
            }
          )}
        </div>

        <div className="divider my-0 opacity-50"></div>

        {/* Create Room Panel */}
        <div className="flex flex-col items-center gap-3 w-full">
          <BasicInput
            placeholder="Room Name"
            type="text"
            onChange={(s) => setCreateRoomName(s as string)}
          />
          <BasicButton label="Create Room" onClick={handleCreateRoom} />
        </div>
      </div>
    </div>
  );
};
