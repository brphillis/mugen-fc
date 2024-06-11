"use client";

import { Icon } from "@/components/Icons/Icon";
import { get_client_logoutGoogle } from "@/helpers/async_authHelpers";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  authServerUrl: string;
  user?: User;
};

export const UserTray = ({ authServerUrl, user }: Props) => {
  const { userName } = user || {};

  const router = useRouter();

  const handleLogout = async () => {
    const { success } = await get_client_logoutGoogle(authServerUrl);
    if (success) {
      router.refresh();
    }
  };

  return (
    <div className="select-none flex flex-row items-center gap-3">
      <Icon icon="person" />
      <div>{userName}</div>
      <Icon icon="cross" extendStyle="cursor-pointer" onClick={handleLogout} />
    </div>
  );
};
