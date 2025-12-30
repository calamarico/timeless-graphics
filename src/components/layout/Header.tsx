import { motion } from "framer-motion";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navItems = [
  { label: "Services", href: "services" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

export default function Header() {
  const activeId = useScrollSpy(
    navItems.map((item) => item.href),
    80
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-medium tracking-wide">
          Timeless Graphics
        </a>

        <nav className="flex gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = activeId === item.href;

            return (
              <a
                key={item.href}
                href={`#${item.href}`}
                className={`transition ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
