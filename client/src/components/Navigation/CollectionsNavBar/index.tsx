"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { placeholderAvatar } from "@/utility/placeholderAvatar";
import NavItem from "./NavItem";
import { linksCollection } from "../CollectionsDrawer/sample";

const CollectionsNavBar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden max-md:flex flex-col">
        <div className="bg-gradient-to-br from-brand-primary to-brand-primary-dark w-full flex items-center justify-start px-4 pb-4 pt-1 -my-[1px] gap-6">
          <div className="w-12 rounded-full ring ring-primary overflow-hidden">
            <label htmlFor="avatarInput">
              <Image src={placeholderAvatar.href} alt="pixel_owner_avatar" />
            </label>
          </div>

          <div>Username</div>
        </div>
        <div className="flex items-center justify-between h-[52px] bg-brand-primary-dark w-full px-3">
          {linksCollection
            ?.filter((g) => g.group === 2)
            .map((navItem, index) => {
              return (
                <NavItem
                  key={`collectionsNavItem_${navItem.group}${index}`}
                  navItem={navItem}
                  currentPath={pathname}
                />
              );
            })}
        </div>

        <div className="hidden max-md:flex items-center justify-around h-[52px] bg-brand-primary w-full px-3">
          {linksCollection
            ?.filter((g) => g.group === 1)
            .map((navItem: any, index) => {
              return (
                <NavItem
                  key={`collectionsNavItem_${navItem.group}${index}`}
                  navItem={navItem}
                  currentPath={pathname}
                  onPathColor="secondary"
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CollectionsNavBar;
