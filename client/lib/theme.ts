import { TTheme } from "./types/typeTheme";
const STORAGE_KEY:string = "theme";


// APLICAR TEMA
export const applyTheme = (theme:TTheme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem(STORAGE_KEY, theme);
}

// LEER TEMA
export const getStoredTheme = (): TTheme =>{
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "dark";
}