"use client";

import { placeholderAvatar } from "@/utility/placeholderAvatar";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { linksCollection } from "./sample";

const CollectionsDrawer = () => {
  const pathname = usePathname();

  return (
    <div className="w-[350px] max-md:hidden h-full bg-brand-primary flex flex-col items-center pb-6 border-r border-brand-primary border-t border-t-white/10">
      <div className="flex flex-col gap-3 items-center pt-6 pb-3">
        <div className="w-24 rounded-full ring ring-primary overflow-hidden">
          <label htmlFor="avatarInput">
            <img src={placeholderAvatar.href} alt="pixel_owner_avatar" />
          </label>
        </div>

        <div>Username</div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="divider my-0 w-full" />

        {linksCollection?.map(
          (
            { label, href, icon, group, isAdmin: adminLink }: NavigationLink,
            index: number
          ) => {
            const onPath = pathname === href;

            const isLastInGroup =
              index === linksCollection.length - 1 ||
              linksCollection[index + 1]?.group !== group;

            const isFirstInGroup = linksCollection[index - 1]?.group !== group;

            return (
              <React.Fragment key={`collectionsDrawItem_${group}_${index}`}>
                {isFirstInGroup && adminLink && (
                  <div className="pb-1">Admin</div>
                )}

                <Link
                  href={href}
                  className={`flex items-center justify-between shadow-md gap-3 rounded-lg p-3 w-[90%] cursor-pointer transition-colors duration-300 hover:bg-brand-primary-dark
                  ${onPath ? "bg-brand-primary-dark" : "bg-brand-secondary"}`}
                >
                  <div>{label}</div>
                  {icon}
                </Link>

                {isLastInGroup && (
                  <div
                    key={`collectionsDrawItemDivider_${group}_${index}`}
                    className="divider my-0 w-full"
                  />
                )}
              </React.Fragment>
            );
          }
        )}
      </div>
    </div>
  );
};

export default CollectionsDrawer;
