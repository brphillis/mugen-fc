"use client";

import Link from "next/link";
import React from "react";
import { linksCollection } from "./nav";
import { usePathname } from "next/navigation";

const NavBarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full justify-center max-lg:hidden">
      {linksCollection?.map(({ label, href }: NavigationLink) => {
        const onPath = pathname === href;

        return (
          <Link
            key={"mainNavItem_" + label}
            href={href}
            className={`cursor-pointer py-3 px-6 mx-1 max-lg:px-3 max-xl:text-sm 
            max-xs:text-sm transition-colors duration-300 hover:text-white border-b-none border-brand-primary-dark/75
            ${onPath ? "text-white" : ""}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBarLinks;
