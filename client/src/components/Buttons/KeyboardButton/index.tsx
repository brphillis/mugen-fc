import React from "react";

type Props = {
  label: string;
};

export const KeyboardButton = ({ label }: Props) => {
  return <kbd className="kbd">{label}</kbd>;
};
