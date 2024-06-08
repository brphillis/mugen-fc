import { GoogleLoginButton } from "@/components/Buttons/GoogleLoginButton";
import { Icon } from "@/components/Icons/Icon";
import React from "react";

type Props = {
  user?: User;
};

const NavBarSocials = ({ user }: Props) => {
  const { userName } = user || {};

  return (
    <div className="flex flex-row justify-end items-center gap-6 w-[250px] max-md:hidden pr-6">
      {!user && process.env?.AUTH_URL ? (
        <GoogleLoginButton authServerUrl={process.env.AUTH_URL} />
      ) : (
        <div className="select-none flex flex-row items-center gap-3">
          <Icon icon="person" />
          <div>{userName}</div>
        </div>
      )}
    </div>
  );
};

export default NavBarSocials;
