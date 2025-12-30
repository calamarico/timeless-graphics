import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-neutral-400 text-sm mb-6"
        >
          Crafted with intention · Visual storytelling
        </motion.p>

        <motion.a
          href="#"
          whileHover={{ opacity: 1 }}
          className="
            text-xs tracking-wide uppercase
            text-neutral-500 hover:text-white
            transition
          "
        >
          © {new Date().getFullYear()} Visual Studio
        </motion.a>
      </div>
    </footer>
  );
}
