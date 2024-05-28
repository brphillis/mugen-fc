import React from "react";

type Props = {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
};

const BasicCheckBox = ({ label, isActive, setIsActive }: Props) => {
  return (
    <div className="form-control pt-3">
      <label className="label cursor-pointer">
        <span>{label}</span>
        <input
          onClick={() => setIsActive(!isActive)}
          type="checkbox"
          checked={isActive}
          className="checkbox ml-3"
          readOnly
        />
      </label>
    </div>
  );
};

export default BasicCheckBox;
