import { ReactNode } from "react";
import { default as DrawerBase } from "react-modern-drawer";
import Close from "../../../assets/close.svg?react";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const Drawer = ({ open, onClose, title, children }: DrawerProps) => {
  return (
    <DrawerBase
      className="!w-auto"
      open={open}
      direction="right"
      onClose={onClose}
    >
      <div className="w-screen max-w-[580px] px-5">
        <div className="py-4 flex justify-between border-b-[1px] border-grey-200 items-center">
          <div className="lato-regular text-xl">{title}</div>
          <button onClick={onClose} aria-label="Close">
            <Close aria-hidden />
          </button>
        </div>
        {children}
      </div>
    </DrawerBase>
  );
};

export default Drawer;
