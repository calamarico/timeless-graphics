import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const navItems = [
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const activeId = useScrollSpy(navItems.map((item) => item.id));
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-medium tracking-wide text-white"
            onClick={() => setMenuOpen(false)}
          >
            Timeless Graphics
          </a>

          {/* Desktop navigation */}
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
                    ${
                      isActive
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }
                    after:absolute after:left-0 after:-bottom-1
                    after:h-px after:bg-white
                    after:transition-all after:duration-300
                    ${
                      isActive
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-white" />
            <span className="w-5 h-px bg-white" />
            <span className="w-5 h-px bg-white" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black text-white"
          >
            <div className="h-full flex flex-col justify-center items-center gap-10">
              {navItems.map((item) => {
                const isActive = activeId === item.id;

                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`
                      text-2xl font-medium tracking-wide transition
                      ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400 hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </motion.a>
                );
              })}

              {/* Close */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-sm text-neutral-400 hover:text-white transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
