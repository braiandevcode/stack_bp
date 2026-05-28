import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, getStoredTheme } from "@/lib/theme";
import type { TTheme } from "@/lib/types/typeTheme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<TTheme>(getStoredTheme());

  useEffect(() => {
    applyTheme(getStoredTheme());
  }, []);

  const toggleTheme = () => {
    const next: TTheme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}