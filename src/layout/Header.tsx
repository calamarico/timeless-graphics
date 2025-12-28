const links = [
  { label: "Servicios", href: "#services" },
  { label: "Cómo trabajo", href: "#approach" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="text-sm font-medium">Nombre Apellido</span>

        <nav className="flex gap-8 text-sm text-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-fg transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
