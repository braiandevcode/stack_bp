import Footer from "@/pages/Footer";
import Header from "@/pages/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
