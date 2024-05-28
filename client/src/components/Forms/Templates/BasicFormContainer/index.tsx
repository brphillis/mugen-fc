"use client";

import React, { Suspense } from "react";

import BasicSecondaryButton from "@/components/Buttons/BasicSecondaryButton";

type Props = {
  title: string;
  onSubmit: () => void;
  submitLabel?: string;
  children: JSX.Element | JSX.Element[];
  useWallet?: true;
  connected?: boolean;
  extendContainerStyle?: string;
};

const BasicFormContainer = ({
  title,
  onSubmit,
  submitLabel,
  children,
  useWallet,
  connected,
  extendContainerStyle,
}: Props) => {
  return (
    <div
      className={`max-md:-mt-8 relative bg-brand-primary-dark rounded-lg max-md:rounded-none w-[720px] px-3 py-6 flex flex-col items-center gap-3 ${extendContainerStyle}`}
    >
      <div className="text-3xl select-none">{title}</div>

      <div className="divider my-0 w-full" />

      <div className="flex flex-col w-full items-center gap-6 px-3">
        {children}
      </div>

      <div className="divider my-0 w-full" />

      {!useWallet && (
        <div className="flex items-center gap-3 max-md:-mb-3 py-3 max-md:flex-col-reverse">
          <BasicSecondaryButton
            label="Back"
            extendStyle="!px-6 left-3 w-full !text-center"
            onClick={() => history.back()}
          />

          <BasicSecondaryButton
            label={submitLabel || "Submit"}
            onClick={onSubmit}
            extendStyle="!px-6"
          />
        </div>
      )}

      {useWallet && (
        <>
          {connected && (
            <BasicSecondaryButton label="Complete" onClick={onSubmit} />
          )}
        </>
      )}
    </div>
  );
};

export default BasicFormContainer;
