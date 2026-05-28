import Hero from "./Hero";
import Services from "./Services";
import PublicObjective from "./PublicObjective";
import Cta from "./Cta";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <PublicObjective />
      <Cta />
    </div>
  );
};

export default Index;
