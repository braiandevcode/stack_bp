import MainContext from "@/context/MainContext";
import { Mail, MessageCircle } from "lucide-react";
import { useContext } from "react";

// LO PRINCIPAL QUE VE EL USUARIO Y LA IMPORTANCIA DE MI SERVICIO
const Hero = () => {
  const { handleEmailClick, handleWhatsAppClick } = useContext(MainContext); //USO DE CONTEXTO
  
  return (
    <>
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
    </>
  );
};

export default Hero;
