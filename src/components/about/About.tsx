import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 sm:py-28 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 grid gap-12 md:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 leading-snug"
          >
            Visual stories, crafted with intention
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-full sm:max-w-lg"
          >
            Every image and every frame is created with a clear purpose:
            to capture emotion, authenticity and moments that feel timeless.
            The focus is always on people, light and the stories that unfold
            naturally.
          </motion.p>
        </div>

        {/* Logo block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative
            w-full
            aspect-[4/5]
            rounded-2xl
            border border-white/10
            bg-black
            flex items-center justify-center
          "
        >
          <motion.img
            src="/images/timeless-graphics-logo.jpeg"
            alt="Timeless Graphics logo"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="
              h-[78%]
              w-auto
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
