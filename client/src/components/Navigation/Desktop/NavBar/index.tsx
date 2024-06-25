import React from "react";
import Link from "next/link";
import NavBarLinks from "./NavBarLinks";
import NavBarSocials from "./NavBarSocials";
import MetalNavBar from "./_Styles/MetalNavBar";

type Props = {
  user?: User;
};

const Navbar = ({ user }: Props) => {
  return (
    <MetalNavBar>
      <div className="relative flex-none lg:hidden">
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

      <NavBarLinks />

      <div className="relative w-full flex items-center justify-center max-lg:pr-[48px]">
        <Link
          href="/"
          className="text-[30px] font-saira_stencil_one text-center hover:text-white transition-colors duration-300"
        >
          MFC
        </Link>
      </div>

      <NavBarSocials user={user} />
    </MetalNavBar>
  );
};

export default Navbar;
