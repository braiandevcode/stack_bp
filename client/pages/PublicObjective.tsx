import { LIST_NAV_OBJECTIVE } from "@/config/config.list.nav";
import { CheckCircle } from "lucide-react";

// SECCION PARA QUE PUBLICO ¿PARA QUIEN ES?
const PublicObjective = () => {
  return (
    <>
      <section
        id="para-quien"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {LIST_NAV_OBJECTIVE.map(([title, text]) => (
              <div
                key={title}
                className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <CheckCircle size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicObjective;
