"use client";

import React, { useEffect, useState } from "react";

type Props = {
  trigger: boolean;
};

const WelcomeBackToast = ({ trigger }: Props) => {
  const [hideClass, setHideClass] = useState<string>("");

  useEffect(() => {
    if (trigger) {
      const timeoutId = setTimeout(() => {
        setHideClass("hidden");
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [trigger]);

  return (
    <>
      {trigger && (
        <div className="fixed z-50 w-[100vw] top-[30%] flex items-center justify-center h-[1px]">
          <div
            className={`bg-brand-primary border border-brand-primary-dark p-6 rounded-lg mt-[65px] w-max
                ${
                  hideClass
                    ? "animate-jump-out animate-delay-[1000ms] animate-duration-[1000ms]"
                    : "animate-jump-in animate-duration-[1000ms]"
                }
          `}
          >
            <div className="animate-fade animate-duration-[3000ms]">
              Welcome Back
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeBackToast;
