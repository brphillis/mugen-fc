import React from "react";
import { UIContextProvider } from "@/context/UIContext";
import WelcomeBackToast from "@/components/Toast/WelcomeBackToast";

const MasterWrapper = ({
  children,
  useWelcomeMessage,
}: {
  children: React.ReactNode;
  authServerUrl: string;
  useWelcomeMessage?: boolean;
  user?: User;
}) => {
  const trigger = false;

  return (
    <UIContextProvider>
      {children}
      {useWelcomeMessage && <WelcomeBackToast trigger={trigger} />}
    </UIContextProvider>
  );
};

export default MasterWrapper;
