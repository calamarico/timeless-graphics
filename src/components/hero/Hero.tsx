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
          className="
            text-[2.75rem]
            leading-[1.05]
            tracking-tight
            font-semibold
            mb-6
            sm:text-5xl
            md:text-6xl
          "
        >
          Timeless
          <br className="sm:hidden" />
          Visual Stories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="
            text-base
            leading-relaxed
            text-neutral-300
            max-w-[22rem]
            mx-auto
            mb-10
            sm:text-lg
            sm:max-w-2xl
          "
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
          <motion.a
            href="#services"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              px-8 py-4
              rounded-full
              bg-white text-black
              font-medium
              text-base
              hover:bg-neutral-200
              transition
              focus:outline-none focus:ring-2 focus:ring-white/40
            "
          >
            View services
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              px-8 py-4
              rounded-full
              border border-white/30
              text-white
              text-base
              hover:bg-white/10
              transition
              focus:outline-none focus:ring-2 focus:ring-white/40
            "
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
