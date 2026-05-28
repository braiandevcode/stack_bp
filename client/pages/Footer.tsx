const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Braian Palacios. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
