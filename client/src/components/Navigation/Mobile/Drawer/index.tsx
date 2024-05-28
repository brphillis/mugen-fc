import React from "react";
import DrawerItem from "./DrawerItem";

type Props = {
  user?: User;
};

const Drawer = ({ user }: Props) => {
  return (
    <div className="drawer-side !max-h-[100dvh] !overflow-y-hidden z-50">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-600">
        <div className="flex flex-col items-center -mt-3 mx-3 mb-6">
          <div className="font-press_start_2p px-2 mx-2 text-brand-white text-xl -mt-3">
            Website Name
          </div>
        </div>

        <DrawerItem label="HOME" />
      </ul>
    </div>
  );
};

export default Drawer;
