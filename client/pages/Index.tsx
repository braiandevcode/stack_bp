import {
  Mail,
  MessageCircle,
  Github,
  Code2,
  Database,
  Zap,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

import { applyTheme, getStoredTheme } from "@/lib/theme";
import ThemeToggle from "@/components/ThemeToggle";

applyTheme(getStoredTheme());

export default function Index() {
  const contactEmail = "braianpalacios699@gmail.com";
  const contactWhatsApp = "+54 2284 715892";
  const contactGithub = "braiandevcode";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/542284715892?text=Hola%20Braian,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios`,
      "_blank",
    );
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">StackBP</div>

          <nav className="hidden md:flex gap-8">
            {[
              ["#servicios", "Servicios"],
              ["#para-quien", "Para quién es"],
              ["#como-trabajo", "Cómo trabajo"],
              ["#tecnologias", "Tecnologías"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            onClick={handleWhatsAppClick}
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contactar
          </button>

          <ThemeToggle />
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background dark:from-primary/20 py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Desarrollo sitios web que hacen crecer tu negocio
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Soluciones web modernas y funcionales, diseñadas para emprendedores
            y negocios que quieren presencia online clara y confiable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Contactarme por WhatsApp
            </button>

            <button
              onClick={handleEmailClick}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Enviar email
            </button>
          </div>
        </div>
      </section>

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

      {/* Para quién es */}
      <section
        id="para-quien"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Emprendedor o startup", "Necesitas validar tu idea"],
              ["Negocio pequeño o mediano", "Quieres mejorar procesos"],
              ["Personas con ideas", "Necesitas llevarlas a la realidad"],
              ["Valoras claridad", "Comunicación directa y realista"],
            ].map(([title, text]) => (
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

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>

          <p className="text-lg opacity-90 mb-8">
            Sin compromiso, solo una conversación clara.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center text-sm text-slate-400">
          © 2026 Braian Palacios. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
