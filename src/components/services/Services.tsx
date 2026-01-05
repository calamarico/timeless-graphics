import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const photoServices = [
  {
    title: "Weddings",
    description:
      "Cinematic storytelling that captures emotion, movement and the essence of your day.",
  },
  {
    title: "Family & Babies",
    description:
      "Natural, warm photography focused on genuine moments and connection.",
  },
  {
    title: "Portraits",
    description:
      "Minimalist portraits with a strong focus on light, texture and expression.",
  },
];

const videoServices = [
  {
    title: "Parties",
    description:
      "Dynamic video coverage that captures atmosphere, energy and key moments.",
  },
  {
    title: "Events",
    description:
      "Professional event videos focused on storytelling, pacing and emotion.",
  },
  {
    title: "Film Editing",
    description:
      "Careful editing with attention to rhythm, narrative flow and visual impact.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black text-white pt-28 pb-24 sm:pt-32 sm:pb-28 border-t border-white/10"
    >
      <div className="max-w-5xl sm:max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12 text-center sm:text-left"
        >
          Services
        </motion.h2>


        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Subcategory header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Photo
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {photoServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Subcategory header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Video
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {videoServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
