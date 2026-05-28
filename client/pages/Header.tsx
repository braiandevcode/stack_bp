import ThemeToggle from "@/components/ThemeToggle";
import { LIST_NAV } from "@/config/config.list.nav";
import MainContext from "@/context/MainContext";
import { X, ListIcon } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";

const Header = () => {
  const { openMenu, open } = useContext(MainContext);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={openMenu}
        />
      )}

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <NavLink to={"/"}>
            <div className="text-2xl font-bold text-primary tracking-tight">StackBP</div>
          </NavLink>
          <div className="flex items-center gap-2">
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              onClick={openMenu}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              {open ? <X size={20} /> : <ListIcon size={20} />}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <nav
        className={`flex flex-col items-center gap-1 justify-center px-4 py-6 fixed md:sticky top-[65px] left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-400 ease-in-out z-30 md:flex-row md:border-none ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}`}
      >
        {LIST_NAV.map(([href, label]) => (
          <NavLink
            key={href}
            to={href}
            end
            className={({ isActive }) =>
              `text-sm font-medium px-4 py-2.5 rounded-md transition-colors w-full md:w-auto text-center ${isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent hover:text-accent-foreground"}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Header;
