import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="p-6 border border-white/10 rounded-xl bg-neutral-900/40 hover:bg-neutral-900 transition"
    >
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
