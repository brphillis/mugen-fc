import Link from "next/link";
import React from "react";
import { PiNoteFill } from "react-icons/pi";

type Props = {
  label: string;
  href?: string;
};

const DrawerItem = ({ label, href }: Props) => {
  return (
    <li className="py-1">
      <Link
        href={href || "/"}
        className="text-brand-white text-xl bg-gradient-to-tr from-brand-primary to-brand-primary-dark mx-1"
      >
        <PiNoteFill size={32} />
        <div className="text-base tracking-widest pl-3">{label}</div>
      </Link>
    </li>
  );
};

export default DrawerItem;
