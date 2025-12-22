import type { iMain } from "@/interface/iMain";
import { createContext } from "react";

// VALORES POR DEFAULT DEL CONTEXT
const defaultValues:iMain = {
  handleWhatsAppClick: () => {},
  handleEmailClick: () => {},
  openMenu: () => {},
  setOpen: () => {},
  open:false,
};

const MainContext = createContext<iMain>(defaultValues);

export default MainContext;
