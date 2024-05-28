"use client";

import React from "react";
import BasicButton from "../BasicButton";
import { authServerBaseUrl } from "../../../../const";
import { Icon } from "@/components/Icons/Icon";

export const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = `${authServerBaseUrl}/auth/google`;
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
