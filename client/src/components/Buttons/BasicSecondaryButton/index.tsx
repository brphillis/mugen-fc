import React from "react";

type Props = {
  label: string;
  onClick?: () => void;
  extendStyle?: string;
};

const BasicSecondaryButton = ({ label, onClick, extendStyle }: Props) => {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={`flex items-center justify-between gap-3 rounded-lg p-3 bg-brand-secondary
      cursor-pointer transition-colors duration-300 hover:bg-brand-secondary/50 ${extendStyle}`}
    >
      <div className="text-center w-full">{label}</div>
    </button>
  );
};

export default BasicSecondaryButton;
