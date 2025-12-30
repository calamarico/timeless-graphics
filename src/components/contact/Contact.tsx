import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-32 border-t border-white/10 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-6"
        >
          Let’s create something meaningful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-neutral-300 max-w-xl mx-auto mb-12"
        >
          If you’re looking for visual storytelling that feels honest,
          cinematic and timeless, I’d love to hear about your project.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          href="mailto:contact@timelessgraphics.de"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  );
}
