import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import BoxedTabs from "@/components/Tabs/BoxedTabs";
import { capitalizeFirst } from "@/helpers/stringHelpers";

type Props = {
  activeTab?: string;
  extendStyle?: string;
  setActiveTab?: (tab: string) => void;
  tabNames?: string[];
  title: string;
  closeFunction?: Dispatch<SetStateAction<string | boolean>>;
};

const BasicTitleBar = ({
  activeTab,
  extendStyle,
  setActiveTab,
  tabNames,
  title,
  closeFunction,
}: Props) => {
  return (
    <>
      <div
        className={`absolute left-[50%] top-0 flex w-full max-w-[100vw] translate-x-[-50%] flex-col rounded-t-md items-center text-brand-white sm:justify-between ${extendStyle}`}
      >
        <div className="flex w-full items-center justify-between px-6 py-4 max-xl:px-6 bg-brand-primary rounded-t-md">
          <h1 className="font-semibold tracking-widest sm:relative sm:left-0 sm:top-0 text-brand-white select-none">
            {capitalizeFirst(title)}
          </h1>

          <div className="flex items-center gap-6">
            <button
              type="button"
              className="cursor-pointer text-brand-white"
              onClick={() => {
                closeFunction && closeFunction(false);
              }}
            >
              <IoClose />
            </button>
          </div>
        </div>

        {activeTab && tabNames && setActiveTab && (
          <BoxedTabs
            tabNames={tabNames}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </div>

      <div className={tabNames ? "h-[90px]" : "h-[45px]"}></div>
    </>
  );
};

export default BasicTitleBar;
