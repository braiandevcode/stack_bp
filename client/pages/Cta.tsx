import MainContext from "@/context/MainContext";
import { MessageCircle } from "lucide-react";
import { useContext } from "react";

// CTA LLAMADA A LA ACCION
const Cta = () => {
  const { handleWhatsAppClick } = useContext(MainContext); //USO DE CONTEXTO

  return (
    <>
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
    </>
  );
};

export default Cta;
