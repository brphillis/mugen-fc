import React from "react";
import { UIContextProvider } from "@/context/UIContext";
import WelcomeBackToast from "@/components/Toast/WelcomeBackToast";
import { AuthContextProvider } from "@/context/AuthContext";
import { NextResponse } from "next/server";

const MasterWrapper = ({
  children,
  authServerUrl,
  useWelcomeMessage,
  user,
}: {
  children: React.ReactNode;
  authServerUrl: string;
  useWelcomeMessage?: boolean;
  user?: User;
}) => {
  const trigger = false;

  if (authServerUrl) {
    return (
      <AuthContextProvider user={user} authServerUrl={authServerUrl}>
        <UIContextProvider>
          {children}
          {useWelcomeMessage && <WelcomeBackToast trigger={trigger} />}
        </UIContextProvider>
      </AuthContextProvider>
    );
  } else {
    return NextResponse.json(
      { error: "Authorization Server Not Found" },
      { status: 401 }
    );
  }
};

export default MasterWrapper;
