import ThemeToggle from "@/components/ThemeToggle";
import { LIST_NAV } from "@/config/config.list.nav";
import MainContext from "@/context/MainContext";
import { ListIcon } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const { openMenu, open } = useContext(MainContext); //USO DE CONTEXTO

  return (
    <>
      <header className="sticky p-2 top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="text-2xl font-bold text-primary">StackBP</div>
          </Link>
          <div className="flex items-center gap-2 lg:gap-0">
            <button className="md:hidden" onClick={openMenu}>
              <ListIcon />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <nav
        className={`flex flex-col sm:flex-row items-center gap-2 justify-center px-3 py-5 fixed md:sticky top-[72px] left-0 w-full bg-background transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-full"} md:static md:translate-y-0`}
      >
        {LIST_NAV.map(([href, label]) => (
          <Link
            key={href}
            to={href}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
