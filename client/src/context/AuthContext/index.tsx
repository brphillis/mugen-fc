"use client";

import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { get_authenticatedUser } from "@/helpers/async_authHelpers";
import { authServerBaseUrl } from "../../../const";

type AuthContextType = {
  user: User;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: FC<{ children: ReactNode; user?: User }> = ({
  children,
  user: serverProvidedUser,
}) => {
  const [user, setUser] = useState<User | undefined>(serverProvidedUser);

  useEffect(() => {
    const handleAuthenticateUser = async () => {
      const { user: foundUser } = await get_authenticatedUser();

      if (foundUser) {
        setUser(foundUser);
      } else {
        window.location.href = `${authServerBaseUrl}/auth/google`;
      }
    };

    if (!user) {
      handleAuthenticateUser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user as User,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
