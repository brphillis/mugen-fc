import Link from "next/link";
import React from "react";
import NavBarLinks from "./NavBarLinks";
import NavBarSocials from "./NavBarSocials";

type Props = {
  user?: User;
};

const Navbar = ({ user }: Props) => {
  return (
    <div className="relative w-[100vw] navbar bg-gradient-to-tr from-black to-brand-white/5 border-b-[1px] border-b-brand-primary/50">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>

      <div className="flex flex-row items-center justify-center w-full pl-6 pr-3">
        <Link
          href="/"
          className="w-[260px] max-lg:w-full text-2xl text-brand-white"
        >
          MFC100
        </Link>

        <NavBarLinks />

        <NavBarSocials user={user} />
      </div>
    </div>
  );
};

export default Navbar;
