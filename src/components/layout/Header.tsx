import { motion } from "framer-motion";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navItems = [
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const activeId = useScrollSpy(navItems.map((item) => item.id));

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-medium tracking-wide text-white"
        >
          Timeless Graphics
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <motion.a
                key={item.id}
                href={item.href}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`
                  relative text-sm transition
                  ${isActive ? "text-white" : "text-neutral-400 hover:text-white"}
                  after:absolute after:left-0 after:-bottom-1
                  after:h-px after:bg-white
                  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item.label}
              </motion.a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
