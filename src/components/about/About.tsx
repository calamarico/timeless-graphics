import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-28 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-6"
          >
            Visual stories, crafted with intention
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-300 leading-relaxed max-w-xl"
          >
            Every image and every frame is created with a clear purpose:
            to capture emotion, authenticity and moments that feel timeless.
            The focus is always on people, light and the stories that unfold
            naturally.
          </motion.p>
        </div>

        {/* Visual block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10"
        >
          {/* Placeholder visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 via-neutral-900 to-black" />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>
    </section>
  );
}
