import React from "react";

type Props = {
  label: string;
};

export const ArcadeButton = ({ label }: Props) => {
  return (
    <div className="flex items-center justify-center p-3 rounded-full text-white bg-red-500 w-8 h-8">
      <p>{label}</p>
    </div>
  );
};
