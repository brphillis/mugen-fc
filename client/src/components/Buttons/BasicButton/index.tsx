"use client";

type Props = {
  label: string;
  name?: string;
  value?: string;
  onClick?: () => void;
  extendStyle?: string;
  type?: "button" | "reset" | "submit";
  hoverEffect?: "grow" | "color";
  disabled?: boolean;
};

const BasicButton = ({
  label,
  name,
  value,
  onClick,
  extendStyle,
  type,
  hoverEffect,
  disabled,
}: Props) => {
  let currentEffect = "";

  switch (hoverEffect) {
    case "grow":
      currentEffect = "hover:scale-[1.01] duration-300 ease-in-out";
      break;
    case "color":
      currentEffect = "hover:brightness-110 duration-300 ease-in-out";
      break;
  }

  return (
    <button
      type={type ? type : "button"}
      name={name ? name : undefined}
      value={value ? value : undefined}
      className={`
       min-w-max relative font-light inline-flex h-[3rem] min-h-[3rem] text-md w-full cursor-pointer items-center justify-center rounded-md border-[1px] pl-[1rem] pr-[1rem] tracking-wide text-center shadow-sm 
      border-brand-primary bg-brand-primary text-brand-white transition-colors duration-300 hover:bg-brand-primary-dark hover:border-brand-primary-dark
      ${disabled ? "opacity-25 btn-disabled" : ""}
       ${currentEffect} ${extendStyle} `}
      onClick={() => onClick && onClick()}
    >
      {label}
    </button>
  );
};

export default BasicButton;
