"use client";

import React from "react";
import { Icon } from "@/components/Icons/Icon";

type Props = {
  authServerUrl: string;
};

export const GoogleLoginButton = ({ authServerUrl }: Props) => {
  const handleLogin = () => {
    window.location.href = `${authServerUrl}/auth/google`;
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
