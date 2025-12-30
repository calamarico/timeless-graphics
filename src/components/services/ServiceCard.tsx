import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="
        group
        relative
        p-6 sm:p-8
        rounded-2xl
        border border-white/10
        bg-neutral-900/40
        transition-all duration-300 ease-out
        hover:bg-neutral-900
        hover:border-white/20
      "
    >
      {/* subtle glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-2xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          bg-gradient-to-br from-white/10 via-transparent to-transparent
        "
      />

      <h3
        className="
          relative
          text-lg sm:text-xl
          font-medium
          mb-3 sm:mb-4
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          relative
          text-neutral-400
          text-sm sm:text-base
          leading-relaxed
          transition-colors duration-300
          group-hover:text-neutral-300
        "
      >
        {description}
      </p>
    </motion.div>
  );
}
