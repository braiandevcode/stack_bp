import { useState, type MouseEvent, type ReactNode, type TouchEvent } from "react";
import MainContext from "./MainContext";
import { contactEmail, contactWhatsApp } from "@/config/config.contact";
import type { iMain } from "@/interface/iMain";

// PROVIDER GLOBAL MAIN
const MainProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [open, setOpen] = useState<boolean>(false);

  // CLICK EN EMAIL
  const handleEmailClick = ():void => {
    window.location.href = `mailto:${contactEmail}`;
  };

  // CLICK EN WSP
  const handleWhatsAppClick = ():void => {
    window.open(
      `https://wa.me/${contactWhatsApp}?text=Hola%20Braian,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios`,
      "_blank",
    );
  };

  const openMenu = (e:MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>):void =>{
    e.preventDefault();
    setOpen(!open)
  }

  const valuesMainConfig: iMain = {
    handleWhatsAppClick,
    setOpen,
    openMenu,
    handleEmailClick,
    open,
  };

  return (
    <MainContext.Provider value={valuesMainConfig}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
