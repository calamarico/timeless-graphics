import { motion } from "framer-motion";
import { Container } from "../ui/Container";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo-ish
    },
  },
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-sm uppercase tracking-[0.3em] text-muted"
          >
            Producción audiovisual
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl md:text-7xl font-semibold leading-tight"
          >
            Historias reales
            <br />
            contadas con intención
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-lg text-muted max-w-xl"
          >
            Fotografía y vídeo para bodas, familias y proyectos personales,
            con un enfoque natural y elegante.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex gap-6"
          >
            <button className="px-8 py-3 rounded-full bg-fg text-bg text-sm font-medium">
              Contacto
            </button>
            <button className="px-8 py-3 rounded-full border border-fg/20 text-sm">
              Ver servicios
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
