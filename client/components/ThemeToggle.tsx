import { useState } from "react";
import { applyTheme, getStoredTheme, Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme());

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}