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
        <div className="flex flex-row justify-end items-center gap-6 w-[320px] max-md:hidden pr-3">
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
