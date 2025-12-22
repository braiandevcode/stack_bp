import type { Dispatch, MouseEvent, SetStateAction, TouchEvent } from "react";

export interface iMain {
  handleWhatsAppClick: () => void;
  handleEmailClick: () => void;
  openMenu: (e:MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open:boolean;
}
