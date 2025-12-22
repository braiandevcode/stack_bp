import { useState } from "react";
import { applyTheme, getStoredTheme } from "@/lib/theme";
import type { TTheme } from "@/lib/types/typeTheme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<TTheme>(getStoredTheme());

  // EVENTO TOGGLE DEL TEMA
  const toggleTheme = () => {
    const next: TTheme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}