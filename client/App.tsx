import "./global.css";
import { createRoot } from "react-dom/client";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MainProvider from "./context/MainProvider";
import Services from "./pages/Services";
import Cta from "./pages/Cta";
import Hero from "./pages/Hero";
import PublicObjective from "./pages/PublicObjective";
import MainLayout from "./layout/MainLayout";

const App = () => (
  <MainProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/hero"
            element={
              <>
                <Hero />
                <Cta />
              </>
            }
          />
          <Route path="/objective" element={<PublicObjective />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </MainProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
