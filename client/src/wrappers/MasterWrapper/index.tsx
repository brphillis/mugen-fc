import React from "react";
import { UIContextProvider } from "@/context/UIContext";
import WelcomeBackToast from "@/components/Toast/WelcomeBackToast";
import { AuthContextProvider } from "@/context/AuthContext";
import { NextResponse } from "next/server";

const MasterWrapper = ({
  children,
  useWelcomeMessage,
  user,
}: {
  children: React.ReactNode;
  useWelcomeMessage?: boolean;
  user?: User;
}) => {
  const trigger = false;

  if (process.env.NEXT_PUBLIC_AUTH_SERVER_URL) {
    return (
      <AuthContextProvider
        user={user}
        authServerUrl={process.env.NEXT_PUBLIC_AUTH_SERVER_URL}
      >
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
