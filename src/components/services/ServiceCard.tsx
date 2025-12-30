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
      className="p-8 border border-white/10 rounded-2xl bg-neutral-900/40 hover:bg-neutral-900 transition"
    >
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
