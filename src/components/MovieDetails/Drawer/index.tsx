import { ReactNode } from "react";
import { classNames } from "src/utils/classNames.helper";
import Close from "../../../assets/close.svg?react";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  id: string;
  children: ReactNode;
};

const Drawer = ({ open, onClose, id, title, children }: DrawerProps) => {
  return (
    <>
      <div
        aria-label={title}
        role="dialog"
        id={id}
        className={classNames(
          "bg-grey-100 fixed z-20 top-0 right-0 h-full w-fit transition-transform",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {open && (
          <div className="w-screen max-w-[580px] px-5">
            <div className="py-4 flex justify-between border-b-[1px] border-grey-200 items-center">
              <div className="lato-regular text-xl">{title}</div>
              <button onClick={onClose} aria-label="Close">
                <Close aria-hidden />
              </button>
            </div>
            {children}
          </div>
        )}
      </div>
      {open && (
        <div
          className="fixed inset-0 z-10 h-screen w-screen bg-grey-900 opacity-50"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Drawer;
