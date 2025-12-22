import { Code2, Database, Zap } from "lucide-react";

const Services = () => {
  return (
    <>
      {/* Servicios */}
      <section id="servicios" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Qué hago</h2>
            <p className="text-lg text-muted-foreground">
              Servicios que ofrezco a tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 size={28} className="text-primary" />,
                title: "Sitios web profesionales",
                text: "Páginas web modernas que representan bien tu negocio y atraen a tus clientes.",
              },
              {
                icon: <Zap size={28} className="text-primary" />,
                title: "Aplicaciones web a medida",
                text: "Herramientas web personalizadas que resuelven problemas específicos.",
              },
              {
                icon: <Database size={28} className="text-primary" />,
                title: "Sistemas de gestión",
                text: "Plataformas simples para organizar la información de tu negocio.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
