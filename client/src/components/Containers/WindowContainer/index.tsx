import { Dispatch, SetStateAction } from "react";
import BasicTitleBar from "../TitleBars/BasicTitleBar";

type Props = {
  activeTab?: string;
  children: JSX.Element | JSX.Element[];
  extendStyle?: string;
  extendTitleBarStyle?: string;
  isActive?: boolean;
  setActiveTab?: (tab: string) => void;
  tabNames?: string[];
  title: string;
  closeFunction?: Dispatch<SetStateAction<string | boolean>>;
};

export const handleWindowedFormData = (
  form: HTMLFormElement
): HTMLFormElement => {
  const openWindow = document.querySelectorAll("#OpenWindowContainer");
  const activeToggle = openWindow[openWindow.length - 1]?.querySelector(
    "#TitlebarActiveToggle"
  );

  if (activeToggle) {
    form.appendChild(activeToggle);
  }

  return form;
};

const WindowContainer = ({
  activeTab,
  children,
  extendStyle,
  extendTitleBarStyle,
  setActiveTab,
  tabNames,
  title,
  closeFunction,
}: Props) => {
  return (
    <div
      id="OpenWindowContainer"
      className={`relative flex max-w-full flex-col gap-3 rounded-md bg-base-600 p-6 !pb-12 max-xl:p-3 max-sm:w-full animate-fade-in animate-duration-1000 ${extendStyle}`}
    >
      <BasicTitleBar
        activeTab={activeTab}
        extendStyle={`${extendTitleBarStyle}`}
        closeFunction={closeFunction}
        setActiveTab={setActiveTab}
        tabNames={tabNames}
        title={title}
      />
      {children}
    </div>
  );
};

export default WindowContainer;
