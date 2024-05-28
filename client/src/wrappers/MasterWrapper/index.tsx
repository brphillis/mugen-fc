import React from "react";
import { UIContextProvider } from "@/context/UIContext";
import WelcomeBackToast from "@/components/Toast/WelcomeBackToast";
import { AuthContextProvider } from "@/context/AuthContext";

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

  return (
    <AuthContextProvider user={user}>
      <UIContextProvider>
        {children}
        {useWelcomeMessage && <WelcomeBackToast trigger={trigger} />}
      </UIContextProvider>
    </AuthContextProvider>
  );
};

export default MasterWrapper;
