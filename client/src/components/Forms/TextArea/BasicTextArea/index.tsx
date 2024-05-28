import ToolTip from "@/components/Indicators/ToolTip";

type Props = {
  extendContainerStyle?: string;
  defaultValue?: string | null;
  disabled?: boolean;
  id?: string;
  label: string;
  labelStyle?: string;
  name: string;
  onChange?: (value: string | React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  extendStyle?: string;
  validationErrors?: ValidationErrors;
};

const BasicTextArea = ({
  extendContainerStyle,
  defaultValue,
  disabled,
  id,
  label,
  labelStyle,
  name,
  onChange,
  placeholder,
  extendStyle,
  validationErrors,
}: Props) => {
  return (
    <div
      className={`form-control relative max-xl:w-full ${
        extendContainerStyle ? extendContainerStyle : "w-[215px]"
      }`}
    >
      <label className="label">
        <span
          className={`label-text  ${
            labelStyle ? labelStyle : "text-brand-white"
          }`}
        >
          {label}
        </span>
      </label>

      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        className={`textarea w-full rounded-sm text-brand-black/75 bg-brand-white
        disabled:!border-base-100/25 disabled:!bg-base-100/25 disabled:!text-brand-black/50
        ${
          validationErrors && name in validationErrors
            ? "textarea-error border !outline-none"
            : ""
        } ${extendStyle}`}
        defaultValue={defaultValue || undefined}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
      />
      {validationErrors && name in validationErrors && (
        <ToolTip tip={validationErrors[name]} iconColor="text-error" />
      )}
    </div>
  );
};

export default BasicTextArea;
