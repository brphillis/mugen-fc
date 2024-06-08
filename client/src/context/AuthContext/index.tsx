"use client";

import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { get_authenticatedUser } from "@/helpers/async_authHelpers";

type AuthContextType = {
  user: User;
  authServerUrl: string;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: FC<{
  children: ReactNode;
  authServerUrl: string;
  user?: User;
}> = ({
  children,
  user: serverProvidedUser,
  authServerUrl: authServerBaseUrl,
}) => {
  const [user, setUser] = useState<User | undefined>(serverProvidedUser);

  useEffect(() => {
    const handleAuthenticateUser = async () => {
      const { user: foundUser } = await get_authenticatedUser(
        authServerBaseUrl
      );

      if (foundUser) {
        console.log("found user: ", user);
        setUser(foundUser);
      } else {
        console.log("user not found, redirecting...");
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
        authServerUrl: authServerBaseUrl as string,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
