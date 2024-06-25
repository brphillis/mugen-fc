import React from "react";
import { GoogleLoginButton } from "@/components/Buttons/GoogleLoginButton";
import { UserTray } from "./UserTray";
import { correctHost } from "@/helpers/envHelpers";

type Props = {
  user?: User;
};

const NavBarSocials = ({ user }: Props) => {
  const authServerUrl = process.env.AUTH_URL;

  return (
    <>
      {authServerUrl ? (
        <div className="relative w-full flex flex-row justify-end items-center gap-6 max-lg:hidden">
          {!user ? (
            <GoogleLoginButton />
          ) : (
            <UserTray
              user={user}
              authServerUrl={correctHost(authServerUrl, true)}
            />
          )}
        </div>
      ) : (
        <div>auth disabled</div>
      )}
    </>
  );
};

export default NavBarSocials;
