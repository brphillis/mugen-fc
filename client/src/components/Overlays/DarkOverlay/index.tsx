import { useEffect, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  fadeIn?: boolean;
  extendStyle?: string;
};

const DarkOverlay = ({ children, fadeIn, extendStyle }: Props) => {
  const [fadeClass, setFadeClass] = useState<string>("");

  useEffect(() => {
    if (fadeIn) {
      const timeout = setTimeout(() => {
        setFadeClass("transition-all duration-500 ease-linear opacity-100");
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setFadeClass(" !opacity-100");
    }
  }, [fadeIn]);

  return (
    <div
      className={`fixed inset-0 z-50 flex h-full w-full max-w-[100vw] flex-col items-center scrollbar-hide justify-start overflow-y-auto bg-black/90 py-6 opacity-0 max-xl:pt-3 max-xl:px-3
         ${fadeClass} ${extendStyle}`}
    >
      {children}
    </div>
  );
};

export default DarkOverlay;
