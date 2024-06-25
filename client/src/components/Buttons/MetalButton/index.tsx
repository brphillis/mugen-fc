"use client";

import { useRouter } from "next/navigation";

type Props = {
  label: string;
  name?: string;
  value?: string;
  onClick?: () => void;
  extendStyle?: string;
  type?: "button" | "reset" | "submit";
  hoverEffect?: "grow" | "color";
  disabled?: boolean;
  href?: string;
};

const MetalButton = ({
  label,
  name,
  value,
  onClick,
  extendStyle,
  type,
  disabled,
  href,
}: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    if (href) {
      router.push(href);
    }
  };

  if (href) {
    onClick = handleNavigate;
  }

  return (
    <button
      type={type ? type : "button"}
      name={name ? name : undefined}
      value={value ? value : undefined}
      className={`
       min-w-max relative font-light inline-flex h-[3rem] min-h-[3rem] text-base hover:text-[17px] hover:tracking-wide w-full cursor-pointer items-center justify-center pl-[1rem] pr-[1rem] tracking-wide text-center shadow-sm 
      border-x-white/50 border-y-0 border-x-[2px] bg-gradient-to-tr from-black to-brand-black text-brand-white transition-all duration-100 hover:border-x-[4px]
      ${disabled ? "opacity-25 btn-disabled" : ""}
      ${extendStyle} `}
      onClick={() => onClick && onClick()}
    >
      <div className="w-full h-full absolute pattern-circuit-board-gray-500/5 hover:pattern-circuit-board-red-500/10 pattern-circuit-board-scale-[0.5] transition-all duration-300"></div>
      {label}
    </button>
  );
};

export default MetalButton;
