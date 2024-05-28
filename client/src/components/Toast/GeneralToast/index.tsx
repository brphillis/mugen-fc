import React, { useEffect, useState } from "react";

type Props = {
  toast?: GeneralToast;
};

const GeneralToast = ({ toast }: Props) => {
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (toast) {
      setDisplay(true);

      const timeoutId = setTimeout(() => {
        setDisplay(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [toast]);

  return (
    <>
      {display && toast?.type === "success" && (
        <div className="animate-fade-left p-3 px-6 rounded-md animate-duration-3000 fixed z-[100] top-[1%] right-[2%] mt-[65px] w-max flex flex-col items-center gap-3 bg-brand-green text-brand-white">
          {toast?.message}
        </div>
      )}

      {display && toast?.type === "danger" && (
        <div className="animate-fade-left p-3 px-6 rounded-md animate-duration-3000 fixed z-[100] top-[1%] right-[2%] mt-[65px] w-max flex flex-col items-center gap-3 bg-brand-red text-brand-white">
          {toast?.message}
        </div>
      )}

      {display && toast?.type === "info" && (
        <div className="animate-fade-left p-3 px-6 rounded-md animate-duration-3000 fixed z-[100] top-[1%] right-[2%] mt-[65px] w-max flex flex-col items-center gap-3 bg-brand-primary text-brand-white">
          {toast?.message}
        </div>
      )}
    </>
  );
};

export default GeneralToast;
