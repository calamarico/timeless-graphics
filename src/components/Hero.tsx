import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background base */}
      <div className="absolute inset-0 bg-bg" />

      {/* Gradient lights */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-[140px]" />
      </motion.div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\"/></svg>')",
        }}
      />

      {/* Content */}
      <Container className="relative z-10 min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.35em] text-muted"
          >
            Fotografía y vídeo
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-6 text-5xl md:text-7xl font-medium leading-[1.05]"
          >
            Historias reales,
            <br />
            contadas con calma
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg text-muted max-w-lg"
          >
            Fotografía y vídeo para bodas y familias,
            <br />
            con un enfoque natural y sin artificios.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex gap-6"
          >
            <button className="px-8 py-3 rounded-full bg-fg text-bg text-sm font-medium">
              Hablemos
            </button>
            <button className="px-8 py-3 rounded-full border border-fg/20 text-sm">
              Servicios
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
