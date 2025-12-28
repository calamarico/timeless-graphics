import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-800" />

      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Timeless Visual Stories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10"
        >
          Audiovisual production, photography and visual storytelling focused on
          emotion, detail and timeless aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
          >
            View services
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
