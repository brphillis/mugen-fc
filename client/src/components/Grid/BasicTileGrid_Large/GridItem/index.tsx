import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BasicGridItem } from "../../BasicTileGrid_Small/GridItem";

const GridItem = ({
  backgroundImageHref,
  title,
  subTitle,
  userAvatarHref,
  href,
  tag1,
  centerTitle,
}: BasicGridItem) => {
  const content = () => {
    return (
      <div
        className="relative overflow-hidden object-cover h-full w-full rounded-lg cursor-pointer bg-cover bg-center hover:bg-[length:105%] hover:bg-[height:105%]"
        style={{
          backgroundImage: backgroundImageHref
            ? `url('${backgroundImageHref}')`
            : "url('/pixelart-tile.gif')",
        }}
      >
        {/* TOP LEFT TAG */}
        {tag1 && (
          <div className="absolute top-3 left-3 bg-brand-primary-dark p-1 rounded-md px-3 max-md:text-xs">
            {tag1}
          </div>
        )}

        {/* BOTTOM BAR */}
        <div
          className={`absolute flex flex-row items-center bg-black/50 w-full bottom-0 left-0 right-0 h-[80px] max-md:h-[54px] px-6 max-md:px-3 
  ${centerTitle ? "justify-center" : "justify-between"}`}
        >
          {/* TITLES */}
          <div className="flex flex-col gap-0">
            <div className="text-lg max-md:text-base max-sm:text-sm tracking-wide">
              {title || "Design Name"}
            </div>

            {subTitle && (
              <div className="text-sm max-md:text-base max-sm:text-sm tracking-wide opacity-50">
                {subTitle}
              </div>
            )}
          </div>

          {/* AVATAR */}
          {userAvatarHref && (
            <div className="w-12 rounded-full overflow-hidden border border-white/30">
              <label htmlFor="avatarInput">
                <Image src={userAvatarHref} alt="pixel_owner_avatar" />
              </label>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (href) {
    return (
      <Link
        href={href}
        className="rounded-lg w-1/4 max-xl:w-full h-[360px] max-md:h-[250px] p-3 max-md:p-[6px] animate-flip-up animate-duration-1000"
      >
        {content()}
      </Link>
    );
  } else {
    return (
      <div className="rounded-lg w-1/4 max-xl:w-full h-[360px] max-md:h-[250px] p-3 max-md:p-[6px] animate-flip-up animate-duration-1000">
        {content()}
      </div>
    );
  }
};

export default GridItem;
