"use client";

type Props = {
  decimals?: number;
  defaultValue?: unknown;
  disabled?: boolean;
  extendContainerStyle?: string;
  extendStyle?: string;
  id?: string;
  label?: string;
  labelStyle?: string;
  name?: string;
  onChange?: (value: string | React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  step?: number;
  type: "text" | "number" | "date" | "password";
  validationErrors?: ValidationErrors;
  value?: number | string;
};

const BasicInput = ({
  decimals,
  defaultValue,
  disabled,
  extendContainerStyle,
  extendStyle,
  id,
  label,
  labelStyle,
  name,
  onChange,
  placeholder,
  step,
  type,
  validationErrors,
  value,
}: Props) => {
  return (
    <div
      className={`form-control relative w-full 
      ${extendContainerStyle}`}
    >
      {label && (
        <label className="label">
          <span
            className={`label-text  ${
              labelStyle ? labelStyle : "text-brand-black"
            }`}
          >
            {label}
          </span>
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder || label}
        disabled={disabled}
        step={step || undefined}
        value={value?.toString() || undefined}
        className={`input text-brand-black/75 bg-brand-white rounded-md
        disabled:!border-base-100/25 disabled:!bg-base-100/25 disabled:!text-brand-black/50
        ${extendStyle}
        ${
          name
            ? validationErrors && name in validationErrors
              ? "input-error border !outline-none"
              : ""
            : undefined
        }`}
        defaultValue={
          decimals
            ? typeof defaultValue === "string"
              ? parseFloat(defaultValue).toFixed(decimals)
              : (defaultValue as number)
            : (defaultValue as string | number | readonly string[] | undefined)
        }
        onChange={(e) => {
          if (onChange) {
            if (decimals) {
              onChange(parseFloat(e.target.value).toFixed(decimals));
            } else {
              onChange(e.target.value);
            }
          }
        }}
      />
    </div>
  );
};

export default BasicInput;
