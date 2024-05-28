import Link from "next/link";
import React from "react";

type Props = {
  navItem: NavigationLink;
  currentPath: string;
  onPathColor?: "primary" | "secondary";
};

const NavItem = ({ navItem, currentPath, onPathColor = "primary" }: Props) => {
  const { href, shortLabel, label } = navItem;

  const onPath = currentPath === href;

  return (
    <Link
      href={href}
      className={`px-3 py-1 rounded-md ${
        onPath
          ? `${
              onPathColor === "primary"
                ? "bg-brand-primary"
                : "bg-brand-secondary"
            } transition-colors duration-300`
          : ""
      }`}
    >
      {shortLabel || label}
    </Link>
  );
};

export default NavItem;
