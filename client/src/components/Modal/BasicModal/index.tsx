import { IoClose } from "react-icons/io5";

type Props = {
  modalKey: string;
  title: string;
  button: JSX.Element | JSX.Element[];
  body: JSX.Element | JSX.Element[];
};

const BasicModal = ({ modalKey, title, button, body }: Props) => {
  return (
    <>
      <button
        className="relative cursor-pointer text-brand-white/50 hover:text-brand-white"
        onClick={() =>
          (document.getElementById(modalKey) as HTMLFormElement).showModal()
        }
      >
        {button}
      </button>

      <dialog id={modalKey} className="modal !rounded-sm !transition-none">
        <div className="scrollbar-hide modal-box !max-w-max max-h-[750px] !rounded-none border-b-[24px] border-b-brand-black bg-brand-black px-0 pt-0 max-xl:!h-full max-xl:!max-h-full max-xl:!w-full">
          <div className="sticky top-0 z-10 mx-auto flex h-[45px] w-full items-center justify-between bg-brand-primary p-3 text-brand-white">
            <p className="select-none">{title}</p>

            <form method="dialog">
              <button type="submit" className="cursor-pointer">
                <IoClose />
              </button>
            </form>
          </div>

          {body}
        </div>
      </dialog>
    </>
  );
};

export default BasicModal;
