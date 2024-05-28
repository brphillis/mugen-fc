"use client";

import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import LoadingCubes_FullScreen from "@/components/Loading/LoadingCubes_FullScreen";
import GeneralToast from "@/components/Toast/GeneralToast";

type UIContextType = {
  loadingOverlay: boolean | null;
  setLoadingOverlay: (key: boolean) => void;
  setGeneralToast: (key: GeneralToast) => void;
};

export const UIContext = createContext<UIContextType>({
  loadingOverlay: false,
  setLoadingOverlay: () => false,
  setGeneralToast: () => undefined,
});

export const UIContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loadingOverlay, setLoadingOverlay] = useState<boolean>(false);
  const [triggerLevelUp, setTriggerLevelUp] = useState<boolean>(false);
  const [generalToast, setGeneralToast] = useState<GeneralToast>();

  // Trigger a popup when user levels up
  useEffect(() => {
    if (triggerLevelUp) {
      const timeout = setTimeout(() => {
        setTriggerLevelUp(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [triggerLevelUp]);

  return (
    <>
      <UIContext.Provider
        value={{
          loadingOverlay,
          setLoadingOverlay,
          setGeneralToast,
        }}
      >
        {children}
      </UIContext.Provider>

      <GeneralToast toast={generalToast} />

      {loadingOverlay && <LoadingCubes_FullScreen message="Loading..." />}
    </>
  );
};
