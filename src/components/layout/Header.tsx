import { motion } from "framer-motion";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/60 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold tracking-wide">
          Timeless Graphics
        </a>

        <nav className="flex gap-6 text-sm text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
