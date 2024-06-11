"use client";

import React from "react";

type Props = {
  icon: string;
  extendStyle?: string;
  size?: number;
  onClick?: () => void;
};

export const Icon = ({ size, extendStyle, icon, onClick }: Props) => {
  let currentIcon;

  switch (icon) {
    case "person": {
      currentIcon = (
        <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
      );
      break;
    }

    case "check": {
      currentIcon = (
        <path d="M5 16.577l2.194-2.195 5.486 5.484L24.804 7.743 27 9.937l-14.32 14.32z" />
      );
      break;
    }

    case "cross": {
      currentIcon = (
        <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z" />
      );
      break;
    }

    case "refresh": {
      currentIcon = (
        <path d="M27.1 14.313V5.396L24.158 8.34c-2.33-2.325-5.033-3.503-8.11-3.503C9.902 4.837 4.901 9.847 4.899 16c.001 6.152 5.003 11.158 11.15 11.16 4.276 0 9.369-2.227 10.836-8.478l.028-.122h-3.23l-.022.068c-1.078 3.242-4.138 5.421-7.613 5.421a8 8 0 0 1-5.691-2.359A7.993 7.993 0 0 1 8 16.001c0-4.438 3.611-8.049 8.05-8.049 2.069 0 3.638.58 5.924 2.573l-3.792 3.789H27.1z" />
      );
      break;
    }
  }

  return (
    <svg
      onClick={() => {
        onClick && onClick();
      }}
      className={`fill-brand-white ${extendStyle}`}
      width={size || 25}
      height={size || 25}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {currentIcon}
    </svg>
  );
};
