"use client";

import React, { createContext, FC, ReactNode } from "react";

type AuthContextType = {
  user: User;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: FC<{
  children: ReactNode;
  user?: User;
}> = ({ children, user }) => {
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
