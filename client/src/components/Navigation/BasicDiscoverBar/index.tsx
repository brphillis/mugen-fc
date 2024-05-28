import Link from "next/link";
import React from "react";

type Props = {};

const BasicDiscoverBar = (props: Props) => {
  return (
    <div className="mb-[6px] bg-gradient-to-tr from-brand-primary to-brand-primary-dark w-full p-1 flex items-center justify-center gap-2">
      <Link
        href="/search"
        className="cursor-pointer py-3 px-6 max-lg:px-3 max-xs:text-sm rounded-md transition-colors duration-300 hover:bg-brand-primary-dark"
      >
        DISCOVER
      </Link>
      <div className="cursor-pointer py-3 px-6 max-lg:px-3 max-xs:text-sm rounded-md transition-colors duration-300 hover:bg-brand-primary-dark bg-brand-secondary">
        PUBLIC
      </div>
      <div className="cursor-pointer py-3 px-6 max-lg:px-3 max-xs:text-sm rounded-md transition-colors duration-300 hover:bg-brand-primary-dark">
        COMMUNITIES
      </div>
      <div className="cursor-pointer py-3 px-6 max-lg:px-3 max-xs:text-sm rounded-md transition-colors duration-300 hover:bg-brand-primary-dark">
        NFT&apos;S
      </div>
    </div>
  );
};

export default BasicDiscoverBar;
