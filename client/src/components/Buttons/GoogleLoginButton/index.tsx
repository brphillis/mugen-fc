"use client";

import React from "react";
import { Icon } from "@/components/Icons/Icon";
import { useRouter } from "next/navigation";

export const GoogleLoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push(`/rooms`);
  };

  return (
    <div
      onClick={handleLogin}
      className="flex items-center gap-3 cursor-pointer hover:text-white"
    >
      <Icon icon="person" extendStyle="fill-brand-white" />
      <span>Login</span>
    </div>
  );
};
