import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-semibold mb-6"
        >
          Let’s create something meaningful
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-neutral-300 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          If you’re looking for visual storytelling that feels honest,
          emotional and timeless, let’s talk.
        </motion.p>

        <motion.a
          href="mailto:contact@timelessgraphics.de"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="inline-block px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition"
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  );
}
